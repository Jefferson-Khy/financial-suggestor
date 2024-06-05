import React from "react";

function PayoffDebt({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <h1>
        You want to pay off short-term high interest debt before moving on
      </h1>
      <a href="https://www.calculators.org/loan/biweekly-vs-monthly.php">
        loan calulator
      </a>
      <button type="button" onClick={handleClick}>
        I've paid off or paid significant amount of my short term high interest
        debt!
      </button>
    </>
  );
}

export default PayoffDebt;
