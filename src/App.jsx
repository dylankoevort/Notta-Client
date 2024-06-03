import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledApp } from "./styles/appStyles";
import { Navbar } from "./components";
import { RxHamburgerMenu } from "react-icons/rx";

const App = () => {
  const [navOpen, setNavOpen] = useState(true);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <StyledApp id="StyledApp">
      <span className="open-nav">
        <RxHamburgerMenu size={24} onClick={toggleNav} />
      </span>
      <nav>
        <Navbar toggleNav={toggleNav} navOpen={navOpen} />
      </nav>
      <main>
        <Outlet />
      </main>
    </StyledApp>
  );
};

export default App;
