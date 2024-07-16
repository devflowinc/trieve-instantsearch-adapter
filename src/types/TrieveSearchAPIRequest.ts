interface LocationInterface {
  lat: number;
  lon: number;
}

interface LocationBias {
  bias: number;
  location: LocationInterface;
}

interface Filters {
  jsonb_prefilter?: boolean;
  must?: any[];
  must_not?: any[];
  should?: any[];
}

interface TagWeights {
  [key: string]: number;
}

export type TrieveSearchType = "semantic" | "fulltext" | "hybrid";

interface TrieveRequiredSearchAPIRequest {
  query: string;
  search_type: TrieveSearchType;
}

export interface TrieveOptionalSearchAPIRequest {
  content_only?: boolean;
  filters?: Filters;
  get_collisions?: boolean;
  get_total_pages?: boolean;
  highlight_delimiters?: any[];
  highlight_max_length?: number;
  highlight_max_num?: number;
  highlight_results?: boolean;
  highlight_threshold?: number;
  highlight_window?: number;
  location_bias?: LocationBias;
  page?: number;
  page_size?: number;
  recency_bias?: number;
  score_threshold?: number;
  slim_chunks?: boolean;
  tag_weights?: TagWeights;
  use_weights?: boolean;
}

export type TrieveSearchAPIRequest = TrieveRequiredSearchAPIRequest &
  TrieveOptionalSearchAPIRequest;
