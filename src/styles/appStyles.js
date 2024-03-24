import styled from "styled-components";

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;

  main {
    height: calc(100% - 40px);
    width: 100%;
    padding: 20px 40px;

    overflow-y: auto;
  }
`;

export { StyledApp };
