import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <form>
        <h1>Login</h1>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>There is an error!!</p>
        <span>
          Don't have an account?{" "}
          <Link to="/register" className="login-register">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
