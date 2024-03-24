import { Link } from "react-router-dom";
import { SignUpButton } from "@clerk/clerk-react";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        <ul>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <SignUpButton>
              <Link to="/sign-up">Sign Up</Link>
            </SignUpButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
