import React from "react";
import { Link } from "react-router-dom";

function PayoffDebt() {
  return (
    <>
      <h1>
        You want to pay off short-term high interest debt before moving on
      </h1>
      <a href="https://www.calculators.org/loan/biweekly-vs-monthly.php">
        loan calulator
      </a>
      <button type="button">
        <Link to="/Retirement">
          I've paid off short term high interest debt!!
        </Link>
      </button>
    </>
  );
}

export default PayoffDebt;
