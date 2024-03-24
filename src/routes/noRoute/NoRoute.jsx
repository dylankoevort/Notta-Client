import React from "react";
import { StyledNoRoute } from "./styles";
import { Link, useRouteError } from "react-router-dom";

const NoRoutePage = () => {
  return (
    <StyledNoRoute>
      <h1>404</h1>
      <h2>This page does not exist!</h2>
      <Link to="/" className="return-btn">
        Return to dashboard
      </Link>
    </StyledNoRoute>
  );
};

export default NoRoutePage;
