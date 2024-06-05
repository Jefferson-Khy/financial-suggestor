import React from "react";

function PayoffDebt({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <div className="question-container">
        <h1>
          You want to pay off short-term high interest debt before moving on
        </h1>
      </div>
      <a href="https://www.calculators.org/loan/biweekly-vs-monthly.php">
        loan calulator
      </a>
      <div className="btn-container">
        <button type="button" onClick={handleClick}>
          I've paid off or paid significant amount of my short term high
          interest debt!
        </button>
      </div>
    </>
  );
}

export default PayoffDebt;
