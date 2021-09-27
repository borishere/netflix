import { FC } from "react";
import { Imovie } from "../Body/Body";
import { MovieCard } from "../MovieCard/MovieCard";
import './style.scss';

type Tprops = {
  movies: Imovie[];
}

export const MoviesList: FC<Tprops> = ({ movies }) => {
  return (
    <ul className='movies-list'>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  )
}