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

export interface ModalProps {
  isShown: boolean;
  show: (val: boolean) => void;
}

export interface AddMovieModalProps extends ModalProps {
  onValueChange?: (val: Imovie) => void;
}

export interface EditMovieModalProps extends AddMovieModalProps {
  movie?: Imovie;
}
