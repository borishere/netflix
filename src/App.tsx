import { FC, useState } from 'react';
import { ErrorBoundary } from './Components/ErrorBoundary/ErrorBoundary';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Body } from './Components/Body/Body';
import { IGetMoviesArgs, Imovie, ImovieBase, IMoviesState } from './Models/models';
import { DeleteMovieModal } from './Components/DeleteMovieModal/DeleteMovieModal';
import { ModalContext } from './Context/ModalContext';
import { EditMovieModal } from './Components/EditMovieModal/EditMovieModal';
import { AddMovieModal } from './Components/AddMovieModal/AddMovieModal';
import { AppContext } from './Context/AppContext';
import { useAppSelector, useTitle } from './Hooks/hooks';
import { useAddMovieMutation, useDeleteMovieMutation, useGetMoviesQuery } from './services/movies';

export const App: FC = () => {
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState<boolean>(false);
  const [showEditMovieModal, setShowEditMovieModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Imovie>();

  const sortBy = useAppSelector((state) => state.movies.sortBy);
  const filter = useAppSelector((state) => state.movies.filter);

  const queryParams: IGetMoviesArgs = { sortBy, sortOrder: 'asc' };

  if (filter) {
    queryParams['filter'] = filter;
  }

  const { data: movies, error, isLoading } = useGetMoviesQuery(queryParams);
  // const [addMovie/* , { isLoading: isAdding } */] = useAddMovieMutation();
  // const [deleteMovie/* , { isLoading: isRemoving } */] = useDeleteMovieMutation();

  // const onAddMovie = (movieData: ImovieBase) => {
  //   addMovie({
  //     ...movieData
  //   });
  // };

  // const onDeleteMovie = (id: string) => {
  //   deleteMovie(id);
  // };

  const renderBody = () => {
    if (isLoading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    if (!movies) {
      return <div>No movies :(</div>;
    }

    return <Body />;
  };

  useTitle('Netfilx');

  return (
    <AppContext.Provider value={{ setSelectedMovie }}>
      <ModalContext.Provider value={{ setShowAddMovieModal, setShowDeleteMovieModal, setShowEditMovieModal }}>
        <Header selectedMovie={selectedMovie} />
        <ErrorBoundary>
          {renderBody()}
        </ErrorBoundary>
        <Footer />

        <AddMovieModal
          isShown={showAddMovieModal}
          show={setShowAddMovieModal}
          // onValueChange={onAddMovie}
        />

        <DeleteMovieModal
          isShown={showDeleteMovieModal}
          show={setShowDeleteMovieModal}
          // onValueChange={onDeleteMovie}
          movie={selectedMovie}
        />

        <EditMovieModal
          isShown={showEditMovieModal}
          show={setShowEditMovieModal}
        // onValueChange={onValueChange}
        // movie
        />
      </ModalContext.Provider>
    </AppContext.Provider>
  );
};