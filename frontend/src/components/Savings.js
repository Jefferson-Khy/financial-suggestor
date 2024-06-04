import React from "react";

function Savings({ financeStep, setFinanceStep, noSavings, setNoSavings }) {
  const yesHandleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  const noHandleClick = () => {
    setNoSavings(noSavings);
  };
  return (
    <>
      <h1>
        Do you have at least 6 months worth of savings to cover expenses? yes or
        no?
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

export default Savings;
