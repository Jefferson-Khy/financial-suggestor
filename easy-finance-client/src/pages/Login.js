import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginService from "../services/loginService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitClick = async (e) => {
    e.preventDefault();
    try {
      await loginService(email, password);
      navigate("/home");
    } catch (error) {}
  };

  const registerClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitClick}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn btn-primary login-btn">
            Login
          </button>
          <button
            type="submit"
            className="btn btn-primary signup-btn"
            onClick={registerClick}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
