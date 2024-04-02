import styled from "styled-components";

const StyledNoRoute = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    color: #aaaaaa;
    font-size: 6rem;
    margin: 0;
  }

  h2 {
    color: #747474;
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }

  .return-btn {
    border: 1px solid #747474;
    border-radius: 6px;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;

    &:hover {
      border-color: #aaaaaa;
    }
  }

  @media screen and (min-width: 500px) {
    gap: 2rem;

    h1 {
      font-size: 10rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .return-btn {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
`;

export { StyledNoRoute };
