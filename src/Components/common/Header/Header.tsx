import { FC, useContext } from 'react';
import { ModalContext } from '../../../Context/ModalContext';
import { Imovie, TNullableMovie } from '../../../Models/models';
import { Logo } from '../Logo/Logo';
import { MovieDetails } from '../../MovieDetails/MovieDetails';
import { SearchForm } from '../../Search/Search';
import { classNames } from '../../../common/utils';
import './style.scss';

interface Props {
  onValueChange?: (val: Imovie) => void;
  selectedMovie?: TNullableMovie;
}

export const Header: FC<Props> = ({ selectedMovie }) => {
  const context = useContext(ModalContext);

  const classes = classNames({
    header: true,
    'search-panel': !selectedMovie,
  });

  return (
    <div className={classes}>
      {selectedMovie ? <MovieDetails selectedMovie={selectedMovie} /> : (
        <>
          <div className='top'>
            <Logo />
            <button className='add-movie-btn' onClick={() => context?.setShowAddMovieModal(true)}>+ ADD MOVIE</button>
          </div>
          <SearchForm />
        </>
      )}
    </div>
  );
};