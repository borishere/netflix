import { FC } from 'react';
import { Modal } from '../Modal/Modal';
import './DeleteMovieModal.scss';

export const DeleteMovieModal: FC<any> = ({movie, ...props }) => {
  const onSubmit = (): void => {
    props.show(false);
    // onValueChange(true);
  }

  return (
    <Modal {...props}>
      <>
        <h2 className='modal-title'>DELETE MOVIE</h2>
        <p>Are you sure you want to delete this movie?</p>
        <div className='modal-buttons'>
          <button className='submit-btn' onClick={onSubmit} >CONFIRM</button>
        </div>
      </>
    </Modal>
  )
}