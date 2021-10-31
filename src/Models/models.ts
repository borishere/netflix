export interface Igenre {
  id: number;
  name: string;
  active: boolean;
}

export interface Imovie {
  id?: number;
  name: string;
  description: string;
  releaseDate: string;
  url: string;
  rating: string;
  genre: string;
  runtime: string;
}
