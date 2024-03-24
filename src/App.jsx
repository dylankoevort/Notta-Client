import { Link, Outlet } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <>
      <header className="header">
        <div>
          <div>
            <p>Notta</p>
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
