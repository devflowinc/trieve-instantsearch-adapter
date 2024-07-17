import { SearchClient } from "algoliasearch-helper/types/algoliasearch";

import { TrieveSearchType } from "./TrieveSearchAPIRequest";

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

export type TrieveSearchClient = Pick<SearchClient, "search">;

export interface TrieveInstantsearchAdapterConfig {
  server: TrieveServerConfig;
  searchType: TrieveSearchType;
}
