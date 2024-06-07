import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import signUpService from "../services/signupService";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const navigate = useNavigate();

  const registerClick = async (e) => {
    e.preventDefault();
    try {
      await signUpService(email, password, first_name, last_name);
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={registerClick}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            placeholder="John"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            placeholder="Doe"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn btn-primary signup-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
