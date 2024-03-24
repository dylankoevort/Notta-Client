import { RedirectToSignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return <RedirectToSignUp afterSignUpUrl={"/"} />;
};

export default SignUpPage;
