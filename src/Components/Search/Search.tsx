import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.scss';

export const SearchForm = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  const { searchQuery } = useParams();

  useEffect(() => {
    if (searchQuery) {
      setValue(searchQuery);
    }
  }, [searchQuery]);

  const searchHandler = () => {
    navigate(`search/${value}`);
  };

  return (
    <div className='search-wrap'>
      <div className='search-title'>FIND YOUR MOVIE</div>
      <div className='search-el'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
