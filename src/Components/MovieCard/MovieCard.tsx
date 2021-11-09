import { FC, useContext, useState } from 'react';
import { ContextMenu } from '../ContextMenu/ContextMenu';
// @ts-ignore
import contextIcon from '../../Images/item-context.svg';
import { AppContext } from '../../Context/AppContext';
import { Imovie } from '../../Models/models';
import { useSearchParams } from 'react-router-dom';
import './style.scss';

interface Props {
  movie: Imovie;
  showEditMovieModal?: (val: boolean) => void;
  showDeleteMovieModal?: (val: boolean) => void;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const appContext = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const onMovieSelect = () => {
    appContext.setSelectedMovie(movie);
    setSearchParams({ movie: movie.id.toString() });
  };

  return (
    <li className='movie-item' onClick={onMovieSelect}>
      <img
        className='context-btn'
        src={contextIcon}
        onClick={() => setShowContextMenu(!showContextMenu)}
      />
      <img src={movie?.poster_path} />
      {showContextMenu && (
        <ContextMenu
          setShow={setShowContextMenu}
          // showEditMovieModal={showEditMovieModal, movie}
          movie={movie}
        />
      )}
      <h2>{movie?.title}</h2>
      <span>{movie?.genres?.map((genre, i) => `${genre}${i < movie.genres.length - 1 ? ', ' : ''}`)}</span>
      <span>{movie?.release_date}</span>
    </li>
  );
};