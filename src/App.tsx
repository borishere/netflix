import React from 'react';
import { ErrorBoundary } from './Components/ErrorBoundary/ErrorBoundary';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { MoviesList } from './Components/MoviesList/MoviesList';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
      <Footer />
    </>
  )
}