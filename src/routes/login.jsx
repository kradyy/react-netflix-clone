import React from "react";
import Background from "../images/background.png";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div
      className="bg-dark h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Navbar navStyle="wide"  />

      <LoginForm />

      <div className="banner_fadeBottom absolute bottom-0 bg-gradient-to-b h-40 from-transparent via-dark to-dark w-full" />

      <div className="backdrop bg-dark bg-opacity-70 h-screen w-full absolute top-0 left-0 z-[1]" />
    </div>
  );
}

export default Login;
