import { useState } from 'react';
import './style.scss';

export const SearchForm = () => {
  const [val, setVal] = useState('');

  const searchHandler = () => {
    // search action with 'val'
  };

  return (
    <div className='search-wrap'>
      <div className='search-title'>FIND YOUR MOVIE</div>
      <div className='search-el'>
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder='What do you want to watch?'
        />
        <button
          className='search-btn'
          onClick={searchHandler}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};
