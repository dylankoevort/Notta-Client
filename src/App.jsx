import { Outlet } from "react-router-dom";
import { StyledApp } from "./styles/appStyles";
import { Navbar } from "./components";

const App = () => {
  return (
    <StyledApp>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </StyledApp>
  );
};

export default App;
