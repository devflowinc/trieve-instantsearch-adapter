export interface GeoInfo {
  lat: number;
  lon: number;
}

interface GeoInfoWithBias {
  bias: number;
  location: GeoInfo;
}

interface Range {
  gte?: number;
  lte?: number;
  gt?: number;
  lt?: number;
}

interface DateRange {
  gte?: string;
  lte?: string;
  gt?: string;
  lt?: string;
}

interface LocationBoundingBox {
  top_left: GeoInfo;
  bottom_right: GeoInfo;
}

interface LocationRadius {
  center: GeoInfo;
  radius: number;
}

interface LocationPolygon {
  exterior: GeoInfo[];
  interior?: GeoInfo[][];
}
interface FieldCondition {
  field: string;
  match?: (string | number)[];
  range?: Range;
  date_range?: DateRange;
  location_range?: LocationBoundingBox;
  geo_radius?: LocationRadius;
  geo_polygon?: LocationPolygon;
}

interface HasIdCondition {
  ids?: string[];
  tracking_ids?: string[];
}

type ConditionType = FieldCondition | HasIdCondition;

interface ChunkFilter {
  jsonb_prefilter?: boolean;
  must?: ConditionType[];
  must_not?: ConditionType[];
  should?: ConditionType[];
}

interface TagWeights {
  [key: string]: number;
}

export type SearchMethod = "semantic" | "fulltext" | "hybrid" | "bm25";

interface TrieveRequiredSearchAPIRequest {
  query: string;
  search_type: SearchMethod;
}

export interface TrieveOptionalSearchAPIRequest {
  page?: number;
  page_size?: number;
  get_total_pages?: boolean;
  filters?: ChunkFilter;
  recency_bias?: number;
  location_bias?: GeoInfoWithBias;
  use_weights?: boolean;
  tag_weights?: TagWeights;
  highlight_results?: boolean;
  highlight_threshold?: number;
  highlight_delimiters?: string[];
  highlight_max_length?: number;
  highlight_max_num?: number;
  highlight_window?: number;
  score_threshold?: number;
  slim_chunks?: boolean;
  content_only?: boolean;
  use_reranker?: boolean;
  use_quote_negated_terms?: boolean;
}

export type TrieveSearchAPIRequest = TrieveRequiredSearchAPIRequest &
  TrieveOptionalSearchAPIRequest & { datasetId: string };
