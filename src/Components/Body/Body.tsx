import { Igenre, Imovie } from '../../Models/models';
import { Filter } from '../Filter/Filter';
import { MoviesList } from '../MoviesList/MoviesList';
import { Sorting } from '../Sorting/Sorting';
import './style.scss';

const genresList: Igenre[] = [
  { id: 1, name: "all", active: true },
  { id: 2, name: "documentary", active: false },
  { id: 3, name: "comedy", active: false },
  { id: 4, name: "horror", active: false },
  { id: 5, name: "crime", active: false }
];

interface Props {
  movies: Imovie[];
  onValueChange?: (val: Imovie) => void;
}

export const Body: React.FC<Props> = ({ movies }) => {
  return (
    <div className='body'>
      <div className='filters-wrap'>
        <Filter genresList={genresList} />
        <Sorting />
      </div>
      <div className='movies-found-label'>39 movies found</div>
      <MoviesList movies={movies}/>
    </div>
  )
}