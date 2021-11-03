import { FC, useEffect, useState } from 'react';
import { initialState } from '../../app/moviesSlice';
import { useAppDispatch } from '../../Hooks/hooks';
import { Imovie } from '../../Models/models';
import { setSortBy } from '../../app/moviesSlice';
import './style.scss';

export const Sorting: FC = () => {
  const [value, setValue] = useState<keyof Imovie>(initialState.sortBy);

  const dispatch = useAppDispatch();

  const onSort = (val: any) => {
    setValue(val.target.value);
  };

  useEffect(() => {
    dispatch(setSortBy(value));
  }, [value, dispatch]);

  return (
    <div className='sorting'>
      <span className='sorting-title'>SORT BY</span>

      <select value={value} onChange={onSort}>
        <option value='release_date'>release date</option>
        <option value='vote_count'>rating</option>
      </select>
    </div>
  );
};
