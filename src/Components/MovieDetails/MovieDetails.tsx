import { FC, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
// @ts-ignore
import searchButton from '../../Images/Search-Button.svg';
import { Imovie } from '../../Models/models';
import { Logo } from '../Logo/Logo';
import './MovieDetails.scss';

interface Props {
  selectedMovie: Imovie;
}

export const MovieDetails: FC<Props> = ({ selectedMovie }) => {
  const appContext = useContext(AppContext);

  return (
    <>
      <div className='top'>
        <Logo />
        <img
          className='search-icon'
          src={searchButton}
          onClick={() => appContext.setSelectedMovie(null)}
        />
      </div>

      <div className='movie-details'>
        <div className='movie-details-cover'>
          <img />
        </div>
        <div className='movie-details-info'>

          <div className='title-rating-wrap'>
            <h2 className='movie-details-title'>{selectedMovie?.title}</h2>
            <span className='movie-details-rating'>{selectedMovie?.vote_average}</span>
          </div>

          <div className='movie-details-genre'>
            {selectedMovie?.genres}
          </div>

          <div>
            <span className='movie-details-year'>{selectedMovie?.release_date}</span>
            <span className='movie-details-runtime'>{`${selectedMovie?.runtime}min`}</span>
          </div>

          <div className='movie-details-description'>
            {selectedMovie?.overview}
          </div>

        </div>
      </div>
    </>
  );
};