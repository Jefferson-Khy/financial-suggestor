import React from "react";

function HealthSavingsContributions({ pageToShow, setPageToShow }) {
  const handleClick = () => {
    setPageToShow("RothIra");
  };
  return (
    <div className="card">
      <div className="question-container">
        <h1>
          I suggest trying to max annual contribution to HSA. It's relatively
          low. Annual contribution limit link below
        </h1>
      </div>
      <a href="https://www.irs.gov/publications/p969">
        HSA annual contribution limit here
      </a>
      <div className="btn-container">
        <button type="button" onClick={handleClick}>
          HSA Maxed!
        </button>
      </div>
    </div>
  );
}

export default HealthSavingsContributions;
