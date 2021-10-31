import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Imovie } from '../../Models/models';
import { AddMovieModalProps, defaultMovie } from '../AddMovieModal/AddMovieModal';
import { Modal } from '../Modal/Modal';
import { ModalForm } from '../ModalForm/ModalForm';
import './editMovieModal.scss';

interface EditMovieModalProps extends AddMovieModalProps {
  movie?: Imovie;
}

export const EditMovieModal: FC<EditMovieModalProps> = ({ ...props }) => {
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
    // props.onValueChange(movie);
  }

  return (
    <Modal {...props}>
      <>
        <h2 className='modal-title'>EDIT MOVIE</h2>
        <ModalForm movie={movie} onChange={onChange} />
        <div className='modal-buttons'>
          <button className='reset-btn' onClick={onReset} >RESET</button>
          <button className='submit-btn' onClick={onSubmit} >SUBMIT</button>
        </div>
      </>
    </Modal>
  )
}