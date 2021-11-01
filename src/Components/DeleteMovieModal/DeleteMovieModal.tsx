import { FC } from 'react';
import { Imovie } from '../../Models/models';
import { Modal, ModalProps } from '../Modal/Modal';
import './DeleteMovieModal.scss';

interface Props extends ModalProps {
  movie: Imovie | undefined;
  onValueChange?: (id: string) => void;
}

export const DeleteMovieModal: FC<Props> = ({ movie, ...props }) => {
  const onSubmit = (): void => {
    props.show(false);

    if (props.onValueChange && movie?.id) {
      props.onValueChange(movie?.id.toString());
    }
  };

  return (
    <Modal {...props}>
      <>
        <h2 className='modal-title'>DELETE MOVIE</h2>
        <p>Are you sure you want to delete this movie?</p>
        <div className='modal-buttons'>
          <button className='submit-btn' onClick={onSubmit}>CONFIRM</button>
        </div>
      </>
    </Modal>
  );
};