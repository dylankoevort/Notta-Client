import styled from "styled-components";

const StyledSpinner = styled.div`
  height: calc(100vh - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-spin-dot-item {
    background-color: #747474;
  }

  @media (min-width: 1024px) {
    height: 100%;
  }
`;

export { StyledSpinner };
