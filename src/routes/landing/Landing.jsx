import { Link } from "react-router-dom";
import { SignUpButton } from "@clerk/clerk-react";
import { StyledLanding } from "./styles";

const LandingPage = () => {
  return (
    <StyledLanding>
      <h1>Notta</h1>
      <h2>Welcome!</h2>
      <div className="nav-buttons">
        <Link to="/sign-in" className="nav-btn">
          Sign In
        </Link>
        <Link to="/sign-up" className="nav-btn">
          Sign Up
        </Link>
      </div>
    </StyledLanding>
  );
};

export default LandingPage;
