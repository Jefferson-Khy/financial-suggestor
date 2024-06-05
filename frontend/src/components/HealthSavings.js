import React from "react";

function HealthSavings({
  financeStep,
  setFinanceStep,
  healthSavings,
  setHealthSavings,
}) {
  const yesHandleClick = () => {
    setHealthSavings(false);
  };
  const noHandleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <div className="question-container">
        <h1>Do you have an HSA?</h1>
      </div>
      <p>include link on what HSA is maybe?</p>
      <div className="btn-container">
        <button type="button" onClick={yesHandleClick}>
          Yes
        </button>
        <button type="button" onClick={noHandleClick}>
          No
        </button>
      </div>
    </>
  );
}

export default HealthSavings;
