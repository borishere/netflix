import React from 'react';
import { Logo } from '../Logo/Logo';
import { SearchForm } from '../Search/Search';
import './style.scss';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='top'>
        <Logo />
        <button className='add-movie-btn'>+ ADD MOVIE</button>
      </div>
      <SearchForm />
    </div>
  )
}