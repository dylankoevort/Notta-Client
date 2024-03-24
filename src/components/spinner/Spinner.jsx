import React from "react";
import { StyledSpinner } from "./styles";
import { Spin } from "antd";

const LoadingSpinner = () => {
  return (
    <StyledSpinner>
      <Spin size="large" />
    </StyledSpinner>
  );
};

export default LoadingSpinner;
