import React, { useState } from 'react';
import './style.scss';

export const SearchForm = () => {
  const [val, setVal] = useState('');

  const searchHandler = () => {
    // search action with 'val'
  };

  return (
    <div className='search-wrap'>
      <div>FIND YOUR MOVIE</div>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};
