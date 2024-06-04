import React from "react";
import { Link } from "react-router-dom";

function Savings() {
  return (
    <>
      <h1>
        Do you have at least 6 months woth of savings to cover expenses? yes or
        no?
      </h1>
      <button type="button">
        <Link to="/Debt">Yes</Link>
      </button>
      <button type="button">
        <Link to="/NoSavings">No</Link>
      </button>
    </>
  );
}

export default Savings;
