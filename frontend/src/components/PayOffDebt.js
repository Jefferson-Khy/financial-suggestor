import React from "react";

function PayoffDebt({ pageToShow, setPageToShow }) {
  const handleClick = () => {
    setPageToShow("401k");
  };
  return (
    <div className="card">
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
    </div>
  );
}

export default PayoffDebt;
