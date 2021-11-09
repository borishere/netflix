import React, { FC, useEffect, useState } from 'react';
import { initialState } from '../../app/moviesSlice';
import { useAppDispatch } from '../../Hooks/hooks';
import { setSortBy } from '../../app/moviesSlice';
import { useSearchParams, useNavigate, useLocation, useParams } from 'react-router-dom';
import './style.scss';

export const Sorting: FC = () => {
  const [value, setValue] = useState<string>(initialState.sortBy);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // const params = new URLSearchParams();
    // if (query) {
    //   params.append('name', query);
    // } else {
    //   params.delete('name');
    // }
    // history.push({search: params.toString()});

  }, []);

  const onSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setValue(value);

    navigate({search: `${window.location.search}&sortBy=${value}`}, {replace: true});
    // setSearchParams({ sortBy: value });
  };

  useEffect(() => {
    dispatch(setSortBy(value));
  }, [value, dispatch]);

  useEffect(() => {
    if (sortBy) {
      setValue(sortBy);
    }
  }, [sortBy]);


  return (
    <div className='sorting'>
      <span className='sorting-title'>SORT BY</span>

      <select className='sorting-items' value={value} onChange={onSort}>
        <option value='release_date'>release date</option>
        <option value='vote_count'>rating</option>
        <option value='title'>title</option>
      </select>
    </div>
  );
};
