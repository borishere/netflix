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
        <img src={searchButton} onClick={() => appContext.setSelectedMovie(null)} />
      </div>

      <div className='movie-details'>
        <div className='movie-details-cover'>
          <img />
        </div>
        <div className='movie-details-info'>

          <div className='title-rating-wrap'>
            <h2 className='movie-details-title'>{selectedMovie?.name}</h2>
            <span className='movie-details-rating'>{selectedMovie?.rating}</span>
          </div>

          <div className='movie-details-genre'>
            {selectedMovie?.genre}
          </div>

          <div>
            <span className='movie-details-year'>{selectedMovie?.releaseDate}</span>
            <span className='movie-details-runtime'>{`${selectedMovie?.runtime}min`}</span>
          </div>

          <div className='movie-details-description'>
            {selectedMovie?.description}
          </div>

        </div>
      </div>
    </>
  )
}