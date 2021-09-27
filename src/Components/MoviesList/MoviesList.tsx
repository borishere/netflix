import React from 'react';
import { Filter } from '../Filter/Filter';
import './style.scss';

export interface Igenre {
  id: number,
  name: string,
  active: boolean
}

const genresList: Igenre[] = [
  { id: 1, name: "all", active: true },
  { id: 2, name: "documentary", active: false },
  { id: 3, name: "comedy", active: false },
  { id: 4, name: "horror", active: false },
  { id: 5, name: "crime", active: false }
];

export const MoviesList: React.FC = () => {
  return (
    <div>
      <Filter genresList={genresList} />
      <div className='sorting'>

      </div>
    </div>
  )
}