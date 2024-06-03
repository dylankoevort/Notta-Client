import styled from "styled-components";

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .open-nav {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    position: fixed;
    width: calc(100% - 40px);
    z-index: 10;
    border-bottom: 1px solid #f5f5ef;
    background-color: #fbfbfa;
  }

  main {
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 20px;

    .open-nav {
      display: none;
    }

    main {
      height: calc(100% - 80px);
      width: 100%;
      padding: 40px;
      min-height: auto;
      margin-top: 0;
      overflow-y: auto;
    }
  }
`;

export { StyledApp };
