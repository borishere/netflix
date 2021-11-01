export interface Igenre {
  name: string;
  active: boolean;
}

export interface ImovieBase {
  title: string;
  overview: string;
  release_date?: string;
  poster_path: string;
  vote_average?: number;
  genres: string[];
  runtime: number;
  tagline?: string;
  vote_count?: number;
  budget?: number;
  revenue?: number;
}

export interface Imovie extends ImovieBase {
  id: number;
}

export interface IMoviesResponse {
  data: Imovie[];
  total: number;
  offset: number;
  limit: number;
}

export interface IMoviesState {
  sortBy: keyof Imovie;
  filter?: string[];
}

export interface IGetMoviesArgs {
  sortBy: keyof Imovie;
  sortOrder: 'asc' | 'desc'
  filter?: string[]
}
