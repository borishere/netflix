import React, { FC, useState } from "react";
import { Igenre } from "../../Models/models";
import './style.scss';

interface Props {
  genresList: Igenre[];
}

export const Filter: FC<Props> = ({ genresList }) => {
  const [genres, setGenres] = useState(genresList);

  const genreClickHandler = (id: number): void => {
    const updatedGenres = genres.map((genre) => {
      genre.active = genre.id === id;

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
          {genre.name.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};
