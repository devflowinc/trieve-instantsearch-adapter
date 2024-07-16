export interface TrieveSearchAPIResponse {
  score_chunks: ScoreChunk[];
  total_chunk_pages: number;
}

export interface ScoreChunk {
  metadata: Metadatum[];
  highlights: string[];
  score: number;
}

export interface Metadatum {
  id: string;
  link: string;
  qdrant_point_id: string;
  created_at: Date;
  updated_at: Date;
  chunk_html: string;
  metadata: Metadata;
  tracking_id: string;
  time_stamp: null;
  dataset_id: string;
  weight: number;
  location: null;
  image_urls: null;
  tag_set: string;
  num_value: null;
}

export interface Metadata {
  openapi?: string;
  title?: string;
}
