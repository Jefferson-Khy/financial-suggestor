import React from "react";
import { Link } from "react-router-dom";

function Retirement({
  financeStep,
  setFinanceStep,
  retirement,
  setRetirement,
}) {
  const yesHandleClick = () => {
    setRetirement(false);
  };
  const noHandleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
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
    </>
  );
}

export default Retirement;
