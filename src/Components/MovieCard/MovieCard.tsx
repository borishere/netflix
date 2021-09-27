import React, { FC } from 'react';
import { Imovie } from '../Body/Body';
import './style.scss';

type Tprops = {
  movie: Imovie;
}

export const MovieCard: FC<Tprops> = ({ movie }) => (
  <li className='movie-item'>
    <h2>{movie.name}</h2>
    <span>{movie.description}</span>
    <span>{movie.year}</span>
  </li>
)