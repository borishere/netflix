import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetMoviesArgs, Imovie, ImovieBase, IMoviesResponse } from '../Models/models';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovie: builder.query<Imovie, string>({
      query: (id) => `movies/${id}`
    }),

    getMovies: builder.query<Imovie[], IGetMoviesArgs>({
      query: (args) => {
        const { sortBy, sortOrder, filter } = args;

        return {
          url: `movies`,
          params: { sortBy, sortOrder, filter }
        };
      },
      transformResponse: (response: IMoviesResponse) => response.data,
      // CACHE
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Movies' as const, id })),
            { type: 'Movies', id: 'LIST' }
          ]
          : [{ type: 'Movies', id: 'LIST' }]
    }),

    addMovie: builder.mutation<Imovie, ImovieBase>({
      query: (body) => ({
        url: 'movies',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Movies', id: 'LIST' }]
    }),

    deleteMovie: builder.mutation<void, string>({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Movies', id: 'LIST' }]
    })
  })
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useAddMovieMutation,
  useDeleteMovieMutation
} = moviesApi;