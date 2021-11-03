import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Imovie, ImovieBase } from '../../Models/models';
import { Modal, ModalProps } from '../Modal/Modal';
import { ModalForm } from '../ModalForm/ModalForm';
import './addMovieModal.scss';

export const defaultMovie: ImovieBase = {
  title: '',
  overview: '',
  genres: [],
  vote_average: 0,
  runtime: 0,
  release_date: '',
  poster_path: ''
};

export interface AddMovieModalProps extends ModalProps {
  onValueChange?: (val: ImovieBase) => void;
}

export const AddMovieModal: FC<AddMovieModalProps> = ({ onValueChange, ...props }) => {
  const [movie, setMovie] = useState<ImovieBase>(defaultMovie);

  useEffect(() => {
    if (props.isShown) {
      setMovie(defaultMovie);
    }
  }, [props.isShown]);

  const onChange = (val: ChangeEvent<HTMLInputElement>, field: keyof Imovie): void => {
    setMovie((movie) => ({
      ...movie,
      [field]: val.target.value
    }));
  };

  const onReset = (): void => {
    setMovie(defaultMovie);
  };

  const onSubmit = (): void => {
    props.show(false);

    if (onValueChange) {
      onValueChange(movie);
    }
  };

  return (
    <Modal {...props}>
      <>
        <h2 className='modal-title'>ADD MOVIE</h2>
        <ModalForm movie={movie} onChange={onChange} />
        <div className='modal-buttons'>
          <button className='reset-btn' onClick={onReset}>RESET</button>
          <button className='submit-btn' onClick={onSubmit}>SUBMIT</button>
        </div>
      </>
    </Modal>
  );
};