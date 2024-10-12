import {Button} from "@/components/ui/button";
import Login from "./Login";
import SignUp from "./SignUp";
import {EnterIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import ForgotPassword from "./ForgotPassword";

export default function ShowAuth() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowLogin(true)}
        className="flex gap-2 items-center"
        variant="outline"
      >
        Kirish <EnterIcon className="w-4 h-4" />
      </Button>
      <Login
        show={showLogin}
        onOpenChange={() => setShowLogin((prev) => !prev)}
        onSignUpClick={() => {
          setShowLogin(false);
          setShowSignUp(true);
        }}
        onForgotPasswordClick={() => {
          setShowLogin(false);
          setShowForgotPassword(true);
        }}
      />
      <SignUp
        show={showSignUp}
        onLoginClick={() => {
          setShowSignUp(false);
          setShowLogin(true);
        }}
        onOpenChange={() => setShowSignUp((prev) => !prev)}
      />
      <ForgotPassword
        show={showForgotPassword}
        onOpenChange={() => setShowForgotPassword((prev) => !prev)}
      />
    </>
  );
}
