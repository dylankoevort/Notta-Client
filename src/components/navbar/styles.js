import styled from "styled-components";

const StyledNavbar = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  &.hidden {
    display: none;
  }

  @media (min-width: 1024px) {
    position: relative;
    max-height: calc(100% - 80px);
    min-width: 300px;
    max-width: 300px;
    display: flex;
    justify-content: center;
    padding: 40px 0;

    &.hidden {
      display: flex !important;
    }
  }
`;

const StyledNavbarContainer = styled.div`
  height: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #fbfbfa;

  &.mobile {
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0;
      color: #747474;
      font-weight: 400;
    }
  }

  &.desktop {
    display: none;
  }

  .close-nav {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  h3,
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }

  h3 {
    color: #aaaaaa;
  }

  p {
    color: #747474;
    font-size: 16px;
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

  .nav-section {
    margin: 10px 0;
    max-width: 100%;

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

    &.active p {
      font-weight: 700;
    }

    .note-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    svg {
      min-width: 16px !important;
    }
  }

  .version {
    position: absolute;
    bottom: 20px;
    margin-top: 10px;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .koevort {
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    &.mobile {
      display: none;
    }

    &.desktop {
      display: flex;
    }

    height: auto;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
    overflow-x: hidden;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.25);
    background-color: #f5f5ef;
    padding: 30px;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }

    .nav-section {
      max-width: 240px;
    }

    .version {
      position: static;
      width: 100%;
    }
  }
`;

export { StyledNavbar, StyledNavbarContainer };
