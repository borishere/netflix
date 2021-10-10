import { FC, useContext, useState } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import { Imovie } from '../../Models/models';
import { AddMovieModal } from '../AddMovieModal/AddMovieModal';
import { Logo } from '../Logo/Logo';
import { SearchForm } from '../Search/Search';
import './style.scss';

interface Props {
  onValueChange?: (val: Imovie) => void;
}

export const Header: FC<Props> = () => {
  const context = useContext(ModalContext);

  return (
    <div className='header'>
      <div className='top'>
        <Logo />
        <button className='add-movie-btn' onClick={() => context.setShowAddMovieModal(true)} >+ ADD MOVIE</button>
      </div>
      <SearchForm />
    </div>
  )
}