import React from "react";

function Debt({ financeStep, setFinanceStep, debt, setDebt }) {
  const yesHandleClick = () => {
    setDebt(true);
  };
  const noHandleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <div className="question-container">
        <h1>
          Do you have any short-term high-interest debt? ie. credit cards or
          personal loans
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

export default Debt;
