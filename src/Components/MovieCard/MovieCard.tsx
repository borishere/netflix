import { FC, useContext, useState } from 'react';
import { Imovie } from '../../Models/models';
import { ContextMenu } from '../ContextMenu/ContextMenu';
// @ts-ignore
import contextIcon from '../../Images/item-context.svg';
import { AppContext } from '../../Context/AppContext';
import './style.scss';

interface Props {
  movie: Imovie;
  showEditMovieModal?: (val: boolean) => void;
  showDeleteMovieModal?: (val: boolean) => void;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const appContext = useContext(AppContext);

  return (
    <li className='movie-item' onClick={() => appContext.setSelectedMovie(movie)}>
      {showContextMenu && (
        <ContextMenu
          setShow={setShowContextMenu}
          // showEditMovieModal={showEditMovieModal, movie}
          movie={movie}
        />
      )}
      <h2>{movie.name}</h2>
      <img
        src={contextIcon}
        onClick={() => setShowContextMenu(!showContextMenu)}
      />
      <span>{movie.description}</span>
      <span>{movie.releaseDate}</span>
    </li>
  )
}