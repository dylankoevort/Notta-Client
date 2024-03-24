import React, { useEffect } from "react";
import { StyledErrorBoundary } from "./styles";
import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <StyledErrorBoundary>
      <h1>Oops!</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>
      <Link to="/" className="return-btn">
        Return to dashboard
      </Link>
    </StyledErrorBoundary>
  );
};

export default ErrorBoundary;
