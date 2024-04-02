import styled from "styled-components";

const StyledNavbar = styled.div`
  max-height: calc(100% - 80px);
  width: 100%;
  min-width: 300px;

  display: flex;
  justify-content: center;

  padding: 40px 0;
`;

const StyledNavbarContainer = styled.div`
  width: calc(100% - 60px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.25);
  background-color: #f5f5ef;

  padding: 30px;

  h3 {
    margin: 0;
    color: #aaaaaa;
    font-size: 14px;
    font-weight: 400;
  }

  p {
    margin: 0;
    color: #747474;
    font-size: 14px;
    font-weight: 400;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  .user {
    width: 100%;
    margin-bottom: 10px;

    .cl-userButtonBox {
      flex-direction: row-reverse;
    }

    .ant-divider-horizontal {
      margin: 10px 0;
    }
  }

  .collections {
    margin: 10px 0;

    h3 {
      margin-bottom: 20px;
    }
  }

  .settings {
    margin: 10px 0;

    h3 {
      margin-bottom: 20px;
    }
  }

  .nav-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 4px 0;
    width: 100%;

    &:hover {
      cursor: pointer;

      p {
        color: #aaaaaa;
      }
    }

    &.active {
      p {
        font-weight: 700;
      }
    }
  }

  .version {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export { StyledNavbar, StyledNavbarContainer };
