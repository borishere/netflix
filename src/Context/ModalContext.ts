import { createContext } from 'react';

export interface IModalContext {
  setShowAddMovieModal: (show: boolean) => void,
  setShowDeleteMovieModal: (show: boolean) => void,
  setShowEditMovieModal: (show: boolean) => void
}

export const ModalContext = createContext<IModalContext | null>(null);