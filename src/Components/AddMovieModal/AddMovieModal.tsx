import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Imovie } from '../../Models/models';
import { Modal, ModalProps } from '../Modal/Modal';
import { ModalForm } from '../ModalForm/ModalForm';
import './addMovieModal.scss';

export const defaultMovie: Imovie = {
  name: '',
  description: '',
  genre: '',
  rating: '',
  runtime: '',
  releaseDate: '',
  url: ''
}

export interface AddMovieModalProps extends ModalProps {
  onValueChange?: (val: Imovie) => void;
}

export const AddMovieModal: FC<AddMovieModalProps> = ({ onValueChange, ...props }) => {
  const [movie, setMovie] = useState<Imovie>(defaultMovie);

  useEffect(() => {
    if (props.isShown) {
      setMovie(defaultMovie);
    }
  }, [props.isShown])

  const onChange = (val: ChangeEvent<HTMLInputElement>, field: keyof Imovie): void => {
    setMovie((movie) => ({
      ...movie,
      [field]: val.target.value
    }));
  }

  const onReset = (): void => {
    setMovie(defaultMovie);
  }

  const onSubmit = (): void => {
    props.show(false);
    // onValueChange(movie);
  }

  return (
    <Modal {...props}>
      <>
        <h2 className='modal-title'>ADD MOVIE</h2>
        <ModalForm movie={movie} onChange={onChange} />
        <div className='modal-buttons'>
          <button className='reset-btn' onClick={onReset} >RESET</button>
          <button className='submit-btn' onClick={onSubmit} >SUBMIT</button>
        </div>
      </>
    </Modal>
  )
}