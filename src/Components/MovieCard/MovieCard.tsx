import { FC, useState } from 'react';
import { Imovie } from '../../Models/models';
import { ContextMenu } from '../ContextMenu/ContextMenu';
// @ts-ignore
import contextIcon from '../../Images/item-context.svg';
import './style.scss';

type Props = {
  movie: Imovie;
  showEditMovieModal?: (val: boolean) => void;
  showDeleteMovieModal?: (val: boolean) => void;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);

  return (
    <li className='movie-item'>
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