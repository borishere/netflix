import { FC } from 'react';
import { useNavigate } from 'react-router';
import { deleteParamFromExistsSearchParams } from '../../common/utils';
// @ts-ignore
import searchButton from '../../Images/Search-Button.svg';
import { Imovie } from '../../Models/models';
import { Logo } from '../Logo/Logo';
import './MovieDetails.scss';

interface Props {
  selectedMovie: Imovie;
}

export const MovieDetails: FC<Props> = ({ selectedMovie }) => {
  const navigate = useNavigate();

  const onSetSearchMode = () => {
    const params = deleteParamFromExistsSearchParams('movie');

    navigate({ search: params.toString() });
  };

  return (
    <>
      <div className='top'>
        <Logo />
        <img
          className='search-icon'
          src={searchButton}
          onClick={onSetSearchMode}
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
            {selectedMovie?.genres?.map((genre, i) => `${genre}${i < selectedMovie.genres.length - 1 ? ', ' : ''}`)}
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