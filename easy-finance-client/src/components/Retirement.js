import React from "react";

function Retirement({ pageToShow, setPageToShow }) {
  const yesHandleClick = () => {
    setPageToShow("has 401k");
  };
  const noHandleClick = () => {
    setPageToShow("HSA");
  };
  return (
    <div className="card">
      <div className="question-container">
        <h1>Does your company offer 401k? pre-tax, after-tax, or Roth?</h1>
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

export default Retirement;
