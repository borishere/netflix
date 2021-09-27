import React, { FC, useState } from "react";
import { Igenre } from "../MoviesList/MoviesList";
import './style.scss';

interface Iprops {
  genresList: Igenre[];
}

export const Filter: FC<Iprops> = ({ genresList }) => {
  const [genres, setGenres] = useState(genresList);

  const genreClickHandler = (id: number): void => {
    const updatedGenres = genres.map((genre) => {
      genre.active = false;

      if (genre.id === id) {
        genre.active = !genre.active;
      }

      return genre;
    });

    setGenres([...updatedGenres]);
  };

  return (
    <ul className='filter-wrap'>
      {genres.map((genre) => (
        <li
          key={genre.id}
          className={`filter-item ${genre.active ? 'active' : ''}`}
          onClick={() => genreClickHandler(genre.id)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};
