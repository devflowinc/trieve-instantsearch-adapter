export interface TrieveSearchAPIResponse {
  chunks: ChunkElement[];
  total_pages: number;
}

export interface ChunkElement {
  chunk: ChunkChunk;
  highlights: string[];
  score: number;
}

export interface ChunkChunk {
  id: string;
  link: string;
  qdrant_point_id: string;
  created_at: Date;
  updated_at: Date;
  chunk_html: string;
  metadata: { [key: string]: string };
  tracking_id: string;
  time_stamp: null;
  dataset_id: string;
  weight: number;
  location: null;
  image_urls: null;
  tag_set: string[];
  num_value: null;
}
