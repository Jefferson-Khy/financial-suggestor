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
      <h1>
        Do you have any short-term high-interest debt? ie. credit cards or
        personal loans
      </h1>
      <button type="button" onClick={yesHandleClick}>
        Yes
      </button>
      <button type="button" onClick={noHandleClick}>
        No
      </button>
    </>
  );
}

export default Debt;
