import { FC } from 'react';
import { Formik } from 'formik';
import { ImovieBase } from '../../../Models/models';
import { useAddMovieMutation } from '../../../services/movies';
import { Modal, ModalProps } from '../../common/Modal/Modal';
import { ModalForm } from '../ModalForm/ModalForm';
import { validationSchema } from '../ModalForm/validationSchema';
import './style.scss';

export const defaultMovie: ImovieBase = {
  title: '',
  overview: '',
  genres: [],
  vote_average: 0,
  runtime: 0,
  release_date: '',
  poster_path: ''
};

export const AddMovieModal: FC<ModalProps> = ({ ...props }) => {
  const [addMovie, {isLoading}] = useAddMovieMutation();

  const onSubmit = (values: ImovieBase): void => {
    addMovie(values).then(() => {
      props.show(false);
    });
  };

  return (
    <Modal modalClass='add-movie-modal' {...props}>
      <>
        {isLoading && <span>Adding...</span>}
        <h2 className='modal-title'>ADD MOVIE</h2>
        <Formik<ImovieBase>
          initialValues={defaultMovie}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <ModalForm />
        </Formik>
      </>
    </Modal>
  );
};