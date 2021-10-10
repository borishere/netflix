import { useEffect, useState } from 'react';
import { ErrorBoundary } from './Components/ErrorBoundary/ErrorBoundary';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Body } from './Components/Body/Body';
import { Imovie, TselectedMovie } from './Models/models';
import { DeleteMovieModal } from './Components/DeleteMovieModal/DeleteMovieModal';
import { ModalContext } from './Context/ModalContext';
import { EditMovieModal } from './Components/EditMovieModal/EditMovieModal';
import { AddMovieModal } from './Components/AddMovieModal/AddMovieModal';
import { AppContext } from './Context/AppContext';
import { useTitle } from './Hooks/hooks';

const mockMovies: Imovie[] = [
  {
    id: 98575,
    name: 'Pulp Fiction',
    description: 'Action & Adventure',
    releaseDate: '2004-07-12',
    url: 'https://pulp.com',
    rating: '7.6',
    runtime: '90',
    genre: 'crime'
  },
  {
    id: 75878,
    name: 'Bohemian Rhapsody',
    description: 'Drama, Biography, Music',
    releaseDate: '2003-04-24',
    url: 'https://bohemian.com',
    rating: '6.6',
    runtime: '190',
    genre: 'horror'
  },
  {
    id: 77419,
    name: 'Kill Bill: Vol 2',
    description: 'Oscar winning Movie',
    releaseDate: '1994-08-15',
    url: 'https://bill.com',
    rating: '5.6',
    runtime: '50',
    genre: 'comedy'
  },
  {
    id: 98878,
    name: 'Avengers: War of Infinity',
    description: 'Action & Adventure',
    releaseDate: '2004-02-02',
    url: 'https://avengers.com',
    rating: '4.6',
    runtime: '80',
    genre: 'crime'
  },
  {
    id: 69165,
    name: 'Inception',
    description: 'Action & Adventure',
    releaseDate: '2003-10-19',
    url: 'https://inception.com',
    rating: '3.6',
    runtime: '150',
    genre: 'horror'
  },
  {
    id: 32665,
    name: 'Reservoir dogs',
    description: 'Oscar winning Movie',
    releaseDate: '1994-12-14',
    url: 'https://reservoir.com',
    rating: '2.6',
    runtime: '115',
    genre: 'horror'
  },
]

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Imovie[]>(mockMovies);
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState<boolean>(false);
  const [showEditMovieModal, setShowEditMovieModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<TselectedMovie>(null);

  // const onValueChange = (val: Imovie) => {
  //   if (!val.id) {
  //     // TEMP: just quick dirty way
  //     val.id = Math.random();
  //   }

  //   setMovies((movies) => ([
  //     ...movies,
  //     val
  //   ]))
  // }

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  useTitle('Netfilx');

  return (
    <AppContext.Provider value={{setSelectedMovie}}>
    <ModalContext.Provider value={{setShowAddMovieModal, setShowDeleteMovieModal, setShowEditMovieModal }}>
      <Header selectedMovie={selectedMovie}/>
      <ErrorBoundary>
        <Body movies={movies} />
      </ErrorBoundary>
      <Footer />

      <AddMovieModal
        isShown={showAddMovieModal}
        show={setShowAddMovieModal}
        // onValueChange={onValueChange}
      />

      <DeleteMovieModal
        isShown={showDeleteMovieModal}
        show={setShowDeleteMovieModal}
      // onValueChange={onValueChange}
      />

      <EditMovieModal
        isShown={showEditMovieModal}
        show={setShowEditMovieModal}
        // onValueChange={onValueChange}
        // movie
      />
    </ModalContext.Provider>
    </AppContext.Provider>
  )
}