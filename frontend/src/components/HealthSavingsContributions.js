import React from "react";

function HealthSavingsContributions({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <h1>
        you want to max out the annoual contribution here its relatively low
        here is the annual contribution limit
      </h1>
      <a href="https://www.irs.gov/publications/p969">
        HSA annual contribution limit here
      </a>
      <button type="button" onClick={handleClick}>
        I've maxed my HSA contributions
      </button>
    </>
  );
}

export default HealthSavingsContributions;
