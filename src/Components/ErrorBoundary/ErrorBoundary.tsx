import React from 'react';

export const ErrorBoundary: React.FC = ({ children }) => {
  const errorMessage = <h2>Something went wrong.</h2>;

  const hasError = false;

  if (hasError) {
    return errorMessage;
  }

  return <>{children}</>;
}