import React from "react";
import "./login.css";

const Login = () => {
  const loginwithgoogle = () => {
    window.open("http://localhost:3001/auth/google/callback", "_self");
  };
  return (
    <>
      <div className="login-page" style={{ textAlign: "center" }}>
        <h1>Login With Google</h1>
        <button className="login-with-google-btn" onClick={loginwithgoogle}>
          Sign In With Google
        </button>
      </div>
    </>
  );
};

export default Login;
