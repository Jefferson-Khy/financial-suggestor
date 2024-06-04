import React from "react";
import { Link } from "react-router-dom";

function NoSavings() {
  return (
    <>
      <h1>Save up at least 6 months of exspenses before moving on</h1>
      <h2>maybe insert money tracker here?</h2>
      <button type="button">
        <Link to="/Debt">
          I have emergency savings for 6 months of expenses!
        </Link>
      </button>
    </>
  );
}

export default NoSavings;
