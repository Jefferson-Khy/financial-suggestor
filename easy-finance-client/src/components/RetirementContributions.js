import React from "react";

function RetirementContributions({ pageToShow, setPageToShow }) {
  const handleClick = () => {
    setPageToShow("HSA");
  };
  return (
    <div className="card">
      <div className="question-container">
        <h1>Contribute at LEAST employer match before moving to next step</h1>
      </div>
      <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits#:~:text=Deferral%20limits%20for%20401(k,to%20cost%2Dof%2Dliving%20adjustments">
        IRS contribution limits
      </a>
      <div className="btn-container">
        <button type="button" onClick={handleClick}>
          Employer Matched!
        </button>
      </div>
    </div>
  );
}

export default RetirementContributions;
