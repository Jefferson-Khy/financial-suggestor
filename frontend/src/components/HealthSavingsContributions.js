import React from "react";

function HealthSavingsContributions({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <div className="question-container">
        <h1>
          I suggest trying to max annual contribution to HSA. It's relatively
          low. Annual contribution limit link below
        </h1>
      </div>
      <a href="https://www.irs.gov/publications/p969">
        HSA annual contribution limit here
      </a>
      <div className="btn-container">
        <button type="button" onClick={handleClick}>
          I've maxed my HSA contributions
        </button>
      </div>
    </>
  );
}

export default HealthSavingsContributions;
