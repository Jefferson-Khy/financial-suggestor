import React from "react";

function Savings({ pageToShow, setPageToShow }) {
  const yesHandleClick = () => {
    setPageToShow("debt");
  };
  const noHandleClick = () => {
    setPageToShow("no savings");
  };

  return (
    <div className="card">
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
    </div>
  );
}

export default Savings;
