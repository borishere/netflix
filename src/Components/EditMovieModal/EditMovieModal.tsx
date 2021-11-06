import { FC } from 'react';
import { Formik } from 'formik';
import { Imovie, validationSchema } from '../../Models/models';
import { useEditMovieMutation } from '../../services/movies';
import { AddMovieModalProps } from '../AddMovieModal/AddMovieModal';
import { Modal } from '../Modal/Modal';
import { ModalForm } from '../ModalForm/ModalForm';
import './editMovieModal.scss';

interface EditMovieModalProps extends AddMovieModalProps {
  movie?: Imovie;
}

export const EditMovieModal: FC<EditMovieModalProps> = ({ movie, ...props }) => {
  const [editMovie, { isLoading }] = useEditMovieMutation();

  const onSubmit = (values: Imovie): void => {
    editMovie(values).then(() => {
      props.show(false);
    });
  };

  return (
    <Modal {...props}>
      <>
        {isLoading && <span>Editing...</span>}
        <h2 className='modal-title'>EDIT MOVIE</h2>
        {movie && (
          <Formik<Imovie>
            initialValues={movie}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <ModalForm />
          </Formik>
        )}
      </>
    </Modal>
  );
};