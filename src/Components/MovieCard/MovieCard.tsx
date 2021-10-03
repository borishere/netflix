import React, { FC } from 'react';
import { Imovie } from '../../Models/models';
import './style.scss';

type Props = {
  movie: Imovie;
}

export const MovieCard: FC<Props> = ({ movie }) => (
  <li className='movie-item'>
    <h2>{movie.name}</h2>
    <span>{movie.description}</span>
    <span>{movie.year}</span>
  </li>
)