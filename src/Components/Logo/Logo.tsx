import React, { FC } from 'react';
import './style.scss';

export const Logo: FC = () => {
  return (
    <div className='logo-wrap'>
      <span className='logo-left'>netflix</span>
      <span className='logo-right'>roulette</span>
    </div>
  );
};