import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Are you student or working professional?</h1>
      <button type="button">
        <Link to="/Savings">Student</Link>
      </button>
      <button type="button">
        <Link to="/Savings">Working Professional</Link>
      </button>
    </>
  );
}

export default Home;
