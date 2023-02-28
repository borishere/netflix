import { FC } from 'react';
import { Formik } from 'formik';
import { Imovie, TNullableMovie } from '../../../Models/models';
import { useEditMovieMutation } from '../../../services/movies';
import { Modal, ModalProps } from '../../common/Modal/Modal';
import { ModalForm } from '../ModalForm/ModalForm';
import { validationSchema } from '../ModalForm/validationSchema';
import './style.scss';

interface EditMovieModalProps extends ModalProps {
  movie: TNullableMovie;
  updateMovie: () => void;
}

export const EditMovieModal: FC<EditMovieModalProps> = ({ movie, updateMovie, ...props }) => {
  const [editMovie, { isLoading }] = useEditMovieMutation();

  const onSubmit = (values: Imovie): void => {
    editMovie(values).then(() => {
      updateMovie();
      props.show(false);
    });
  };

  return (
    <Modal modalClass='edit-movie-modal' {...props}>
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