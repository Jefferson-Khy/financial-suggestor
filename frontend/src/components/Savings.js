import React from "react";

function Savings({ financeStep, setFinanceStep, noSavings, setNoSavings }) {
  const yesHandleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  const noHandleClick = () => {
    setNoSavings(true);
  };
  return (
    <>
      <div className="question-container">
        <h1>
          Do you have at least 6 months worth of savings to cover expenses?
        </h1>
      </div>
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

export default Savings;
