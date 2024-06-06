import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="submit" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
