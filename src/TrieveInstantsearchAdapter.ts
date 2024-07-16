import {
  MultipleQueriesResponse,
  MultipleQueriesQuery,
} from "@algolia/client-search";

import {
  TrieveSearchAPIRequest,
  TrieveSearchType,
} from "./types/TrieveSearchAPIRequest";

import {
  PerformTrieveSearchResponse,
  TrieveInstantsearchAdapterConfig,
  TrieveSearchClient,
  TrieveServerConfig,
} from "./types/TrieveInstantsearchAdapter";

import axios from "axios";

export default class TrieveInstantsearchAdapter {
  private _searchType: TrieveSearchType;
  private _serverConfig: TrieveServerConfig;
  public searchClient: TrieveSearchClient;

  constructor(config: TrieveInstantsearchAdapterConfig) {
    this._serverConfig = config.server;

    this._searchType = config.searchType;

    this.searchClient = {
      search: async (instantsearchRequests) => {
        const adaptedRequests = instantsearchRequests.map(
          this._adaptSearchRequest
        );

        const trieveSearchResponses = await this._performTrieveSearchRequests(
          adaptedRequests
        );

        const adaptedResponses = trieveSearchResponses.map(
          this._adaptSearchResponse
        );

        const response: MultipleQueriesResponse<any> = {
          results: adaptedResponses,
        };

        return response;
      },
    };
  }

  private _performTrieveSearchRequests = async (
    adaptedRequests: TrieveSearchAPIRequest[]
  ) => {
    return await Promise.all(
      adaptedRequests.map(async (adaptedRequest) => {
        const timer = Date.now();

        const { data } = await axios.post(
          `${this._serverConfig.url}/api/chunk/search`,
          adaptedRequest,
          {
            headers: {
              Authorization: `Bearer ${this._serverConfig.apiKey}`,
              "TR-Dataset": this._serverConfig.dataset,
            },
          }
        );

        return {
          apiResponse: data,
          processingTime: Date.now() - timer,
          query: adaptedRequest.query,
        };
      })
    );
  };

  private _adaptSearchRequest = (
    query: MultipleQueriesQuery
  ): TrieveSearchAPIRequest => {
    return {
      query: query.params?.query || " ",
      search_type: this._searchType,
    };
  };

  private _adaptSearchResponse = (response: PerformTrieveSearchResponse) => {
    return {
      hits: response.apiResponse.score_chunks.map((scoreChunk) => ({
        objectID: scoreChunk.metadata[0].tracking_id,
        highlights: scoreChunk.highlights,
        ...scoreChunk.metadata[0],
      })),
      processingTimeMS: response.processingTime,
      exhaustiveNbHits: true,
      hitsPerPage: 10,
      nbHits: response.apiResponse.score_chunks.length,
      nbPages: response.apiResponse.total_chunk_pages,
      page: 0,
      params: "",
      query: response.query,
    };
  };
}
