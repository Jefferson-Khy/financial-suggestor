import React from "react";

function Debt({ pageToShow, setPageToShow }) {
  const yesHandleClick = () => {
    setPageToShow("has debt");
  };
  const noHandleClick = () => {
    setPageToShow("401k");
  };
  return (
    <div className="card">
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
    </div>
  );
}

export default Debt;
