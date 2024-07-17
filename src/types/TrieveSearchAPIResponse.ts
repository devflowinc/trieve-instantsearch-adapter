import { GeoInfo } from "./TrieveSearchAPIRequest";

export interface SearchResponseBody {
  chunks: ScoreChunk[];
  total_pages: number;
}

export interface ScoreChunk {
  chunk: Chunk;
  highlights: string[];
  score: number;
}

export interface Chunk {
  id: string;
  link: string | null;
  created_at: string;
  updated_at: string;
  chunk_html: string | null;
  metadata: object | null;
  tracking_id: string | null;
  time_stamp: string | null;
  dataset_id: string;
  weight: number;
  location: GeoInfo | null;
  image_urls: string[] | null;
  tag_set: string[] | null;
  num_value: number | null;
}
