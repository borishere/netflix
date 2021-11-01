import { FC, useContext, useState } from 'react';
import { ContextMenu } from '../ContextMenu/ContextMenu';
// @ts-ignore
import contextIcon from '../../Images/item-context.svg';
import { AppContext } from '../../Context/AppContext';
import './style.scss';
import { useCachedMovies } from '../../Hooks/hooks';

interface Props {
  movieId: number;
  showEditMovieModal?: (val: boolean) => void;
  showDeleteMovieModal?: (val: boolean) => void;
}

export const MovieCard: FC<Props> = ({ movieId }) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const appContext = useContext(AppContext);

  const { movies } = useCachedMovies();
  const movie = movies?.find((movie) => movie.id === movieId);

  return (
    <li className='movie-item' onClick={() => appContext.setSelectedMovie(movie)}>
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