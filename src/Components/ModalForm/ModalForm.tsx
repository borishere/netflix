import { ChangeEvent, FC } from 'react';
import { Imovie, ImovieBase } from '../../Models/models';

interface Props {
  movie: ImovieBase;
  onChange: (val: any, field: keyof Imovie) => void;
}

export const ModalForm: FC<Props> = ({ movie, onChange }) => {
  return (
    <form className='modal-form'>
      <div className='modal-form__item-wrap'>
        <div className='modal-form__item'>
          <label>title</label>
          <input type='text' value={movie.title} onChange={(val) => onChange(val, 'title')} />
        </div>
        <div className='modal-form__item'>
          <label>RELEASE DATE</label>
          <input type='date' placeholder='Select Date' value={movie.release_date} onChange={(val) => onChange(val, 'release_date')} />
        </div>
      </div>

      <div className='modal-form__item-wrap'>
        <div className='modal-form__item'>
          <label>MOVIE URL</label>
          <input type='text' value={movie.poster_path} placeholder='https://' onChange={(val) => onChange(val, 'poster_path')} />
        </div>
        <div className='modal-form__item'>
          <label>RATING</label>
          <input type='text' value={`${movie.vote_average}`} placeholder='7.8' onChange={(val) => onChange(val, 'vote_average')} />
        </div>
      </div>

      <div className='modal-form__item-wrap'>
        <div className='modal-form__item'>
          <label>GENRE</label>

          <select multiple value={movie.genres} onChange={(val) => onChange(val, 'genres')}>
            <option value='Comedy'>Comedy</option>
            <option value='Drama'>Drama</option>
            <option value='Romance'>Romance</option>
          </select>
          {/* <input type='text' value={movie.genres} onChange={(val) => onChange(val, 'genres')} /> */}
        </div>
        <div className='modal-form__item'>
          <label>RUNTIME</label>
          <input type='text' value={`${movie.runtime}`} placeholder='minutes' onChange={(val) => onChange(val, 'runtime')} />
        </div>
      </div>

      <div className='modal-form__item'>
        <label>OVERVIEW</label>
        <input type='text' value={movie.overview} placeholder='movie description' onChange={(val) => onChange(val, 'overview')} />
      </div>
    </form>
  );
};