import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../Hooks/hooks';
import { Igenre } from '../../Models/models';
import { setFilter } from '../../app/moviesSlice';
import './style.scss';

interface Props {
  genresList: Igenre[];
}

export const Filter: FC<Props> = ({ genresList }) => {
  const [genres, setGenres] = useState(genresList);

  const dispatch = useAppDispatch();

  const genreClickHandler = (name: string): void => {
    const updatedGenres = genres.map((genre) => {
      genre.active = genre.name === name;

      return genre;
    });

    setGenres([...updatedGenres]);
  };

  useEffect(() => {
    const preparedGenres = genres
      .filter((genre) => genre.active)
      .map((genre) => genre.name);

    dispatch(setFilter(preparedGenres));
  }, [genres, dispatch]);


  return (
    <ul className='filter-wrap'>
      {genres.map((genre) => (
        <li
          key={genre.name}
          className={`filter-item ${genre.active ? 'active' : ''}`}
          onClick={() => genreClickHandler(genre.name)}
        >
          {genre.name.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};
