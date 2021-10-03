import React from 'react';
import { ErrorBoundary } from './Components/ErrorBoundary/ErrorBoundary';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Body } from './Components/Body/Body';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Body />
      </ErrorBoundary>
      <Footer />
    </>
  )
}