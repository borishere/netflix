import React from 'react';
import { Filter } from '../Filter/Filter';
import { MoviesList } from '../MoviesList/MoviesList';
import { Sorting } from '../Sorting/Sorting';
import './style.scss';

export interface Igenre {
  id: number,
  name: string,
  active: boolean
}

export interface Imovie {
  id: number,
  name: string,
  description: string,
  year: number
}

const genresList: Igenre[] = [
  { id: 1, name: "all", active: true },
  { id: 2, name: "documentary", active: false },
  { id: 3, name: "comedy", active: false },
  { id: 4, name: "horror", active: false },
  { id: 5, name: "crime", active: false }
];

const movies: Imovie[] = [
  {
    id: 98575,
    name: 'Pulp Fiction',
    description: 'Action & Adventure',
    year: 2004
  },
  {
    id: 75878,
    name: 'Bohemian Rhapsody',
    description: 'Drama, Biography, Music',
    year: 2003
  },
  {
    id: 77419,
    name: 'Kill Bill: Vol 2',
    description: 'Oscar winning Movie',
    year: 1994
  },
  {
    id: 98878,
    name: 'Avengers: War of Infinity',
    description: 'Action & Adventure',
    year: 2004
  },
  {
    id: 69165,
    name: 'Inception',
    description: 'Action & Adventure',
    year: 2003
  },
  {
    id: 32665,
    name: 'Reservoir dogs',
    description: 'Oscar winning Movie',
    year: 1994
  },
]

export const Body: React.FC = () => {
  return (
    <div className='body'>
      <div className='filters-wrap'>
        <Filter genresList={genresList} />
        <Sorting />
      </div>
      <div className='movies-found-label'>39 movies found</div>
      <MoviesList movies={movies} />
    </div>
  )
}