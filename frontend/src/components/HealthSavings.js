import React from "react";

function HealthSavings({ pageToShow, setPageToShow }) {
  const yesHandleClick = () => {
    setPageToShow("has HSA");
  };
  const noHandleClick = () => {
    setPageToShow("RothIra");
  };
  return (
    <div className="card">
      <div className="question-container">
        <h1>Do you have an HSA?</h1>
      </div>
      <p>include link on what HSA is maybe?</p>
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

export default HealthSavings;
