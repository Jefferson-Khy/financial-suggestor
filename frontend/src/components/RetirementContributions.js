import React from "react";

function RetirementContributions({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <h1>Contribute at LEAST employer match before moving to next step</h1>
      <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits#:~:text=Deferral%20limits%20for%20401(k,to%20cost%2Dof%2Dliving%20adjustments">
        IRS contribution limits
      </a>
      <button type="button" onClick={handleClick}>
        I've contributed at LEAST up to employer match!
      </button>
    </>
  );
}

export default RetirementContributions;
