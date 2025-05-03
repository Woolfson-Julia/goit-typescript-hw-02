export interface ImageSearchResponse {
  results: Image[];
}

export interface Image {
  id: string;
  description: string | undefined;
  urls: Urls;
  likes: number;
  user: User;
}

export interface Urls {
  regular: string;
  small: string
}

export interface User {
  name: string;
}
export type ImageClickHandler = (item: Image) => void;

