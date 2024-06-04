import React from "react";
import { Link } from "react-router-dom";

function Debt() {
  return (
    <>
      <h1>
        Do you have any short-term high-interest debt? ie. credit cards or
        personal loans
      </h1>
      <button type="button">
        <Link to="/PayOffDebt">Yes</Link>
      </button>
      <button type="button">
        <Link to="/Retirement">No</Link>
      </button>
    </>
  );
}

export default Debt;
