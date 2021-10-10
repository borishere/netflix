import { FC } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from '../../Models/models';
import './style.scss';

export const Modal: FC<ModalProps> = ({ isShown, show, children }) => {
  if (!isShown) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-close-btn' onClick={() => show(false)} >x</div>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>,
      document.getElementById('root') as Element
    ))
};