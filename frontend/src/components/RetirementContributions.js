import React from "react";
import { Link } from "react-router-dom";

function Retirement() {
  return (
    <>
      <h1>Contribute at LEAST employer match before moving to next step</h1>
      <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits#:~:text=Deferral%20limits%20for%20401(k,to%20cost%2Dof%2Dliving%20adjustments">
        IRS contribution limits
      </a>
      <button type="button">
        <Link to="/HealthSavings">Ive contributed at LEAST employer match</Link>
      </button>
    </>
  );
}

export default Retirement;
