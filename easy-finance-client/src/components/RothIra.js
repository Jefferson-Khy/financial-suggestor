import React from "react";

function RothIra({ pageToShow, setPageToShow }) {
  const handleClick = () => {
    setPageToShow("optional investments");
  };
  return (
    <div className="card">
      <div className="question-container">
        <h1>
          Open Roth IRA! I suggest maxing annual contrib. limits. Annual limits
          are relatively low, Link Below
        </h1>
      </div>
      <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits">
        Roth IRA annual contribution limit here
      </a>
      <div className="btn-container">
        <button type="button" onClick={handleClick}>
          Roth IRA Maxed!
        </button>
      </div>
    </div>
  );
}

export default RothIra;
