import { RedirectToSignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return <RedirectToSignIn afterSignInUrl={"/"} />;
};

export default SignInPage;
