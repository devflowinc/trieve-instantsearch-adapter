import { SearchMethod } from "./TrieveSearchAPIRequest";

import {
  MultipleQueriesResponse,
  MultipleQueriesQuery,
} from "@algolia/client-search";

import { TrieveSearchAPIResponse } from "./TrieveSearchAPIResponse";

export interface PerformTrieveSearchResponse {
  apiResponse: TrieveSearchAPIResponse;
  processingTime: number;
  query: string;
}

export interface TrieveServerConfig {
  url: string;
  apiKey: string;
}

export interface TrieveSearchClient {
  search: (
    instantsearchRequests: MultipleQueriesQuery[]
  ) => Promise<MultipleQueriesResponse<any>>;
}

export interface TrieveInstantsearchAdapterConfig {
  server: TrieveServerConfig;
  searchType: SearchMethod;
}
