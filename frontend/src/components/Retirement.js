import React from "react";
import { Link } from "react-router-dom";

function Retirement() {
  return (
    <>
      <h1>Does your company offer 401k? pre-tax, after-tax, or Roth?</h1>
      <button type="button">
        <Link to="/RetirementContributions">Yes</Link>
      </button>
      <button type="button">
        <Link to="/HealthSavings">No</Link>
      </button>
    </>
  );
}

export default Retirement;
