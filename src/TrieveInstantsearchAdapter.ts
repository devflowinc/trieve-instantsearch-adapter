import {
  MultipleQueriesResponse,
  MultipleQueriesQuery,
} from "@algolia/client-search";

import {
  TrieveSearchAPIRequest,
  SearchMethod,
} from "./types/TrieveSearchAPIRequest";

import {
  PerformTrieveSearchResponse,
  TrieveInstantsearchAdapterConfig,
  TrieveSearchClient,
  TrieveServerConfig,
} from "./types/TrieveInstantsearchAdapter";

import axios from "axios";

export default class TrieveInstantsearchAdapter {
  private _searchType: SearchMethod;
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
              "TR-Dataset": adaptedRequest.datasetId,
              "X-API-Version": "2.0",
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
      datasetId: query.indexName,
    };
  };

  private _adaptSearchResponse = (response: PerformTrieveSearchResponse) => {
    return {
      hits: response.apiResponse.chunks.map((chunk) => ({
        objectID: chunk.chunk.tracking_id,
        highlights: chunk.highlights,
        ...chunk.chunk,
      })),
      processingTimeMS: response.processingTime,
      exhaustiveNbHits: true,
      hitsPerPage: 10,
      nbHits: response.apiResponse.chunks.length,
      nbPages: response.apiResponse.total_pages,
      page: 0,
      params: "",
      query: response.query,
    };
  };
}
