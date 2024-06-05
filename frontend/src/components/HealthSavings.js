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
      <h1>Do you have an HSA?</h1>
      <p>include link on what HSA is maybe?</p>
      <button type="button" onClick={yesHandleClick}>
        Yes
      </button>
      <button type="button" onClick={noHandleClick}>
        No
      </button>
    </>
  );
}

export default HealthSavings;
