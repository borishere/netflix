import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';
import { IGetMoviesArgs } from '../Models/models';
import { moviesApi } from '../services/movies';

export const useTitle = (title: string = '') => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export const useCachedMovies = () => {
  const sortBy = useAppSelector((state) => state.movies.sortBy);
  const filter = useAppSelector((state) => state.movies.filter);

  const queryParams: IGetMoviesArgs = { sortBy, sortOrder: 'asc' };

  if (filter) {
    queryParams['filter'] = filter;
  }

  const { data: movies } = moviesApi.endpoints.getMovies.useQueryState(queryParams);

  return { movies };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;