import React from "react";

function RothIra({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
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
          You're basically DONE! But if you have extra income after the previous
          steps here are more investment options for your FUTURE!!
        </button>
      </div>
    </>
  );
}

export default RothIra;
