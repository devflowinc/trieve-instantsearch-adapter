import { SearchClient } from "algoliasearch-helper/types/algoliasearch";

import { SearchMethod } from "./TrieveSearchAPIRequest";

import { SearchResponseBody } from "./TrieveSearchAPIResponse";

export interface PerformTrieveSearchResponse {
  apiResponse: SearchResponseBody;
  processingTime: number;
  query: string;
}

export interface TrieveServerConfig {
  url: string;
  apiKey: string;
}

export type TrieveSearchClient = Pick<SearchClient, "search">;

export interface TrieveInstantsearchAdapterConfig {
  server: TrieveServerConfig;
  searchType: SearchMethod;
}
