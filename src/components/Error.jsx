import React from 'react';
import { useRouteError } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = () => {
  const err = useRouteError();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-dark">
      <h1 className="display-4 text-danger">Oops!!</h1>
      <h2 className="h4">Something went wrong.</h2>
      <h3 className="text-muted">{err?.data || 'An unexpected error occurred.'}</h3>
      <p className="mt-4 text-secondary">
        Please try refreshing the page or check back later.
      </p>
      <a
        href="/"
        className="btn btn-primary mt-3"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;
