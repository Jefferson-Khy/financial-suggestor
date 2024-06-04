import React from "react";
import { Link } from "react-router-dom";

function RothIra() {
  return (
    <>
      <h1>
        Open individual Roth IRA max out annual contribution limits annual
        limits are relatively low
      </h1>
      <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits">
        Roth IRA annual contribution limit here
      </a>
      <button type="button">
        <Link to="/OptionalInvestments">
          You're basically DONE! But if you have extra income after the previous
          steps here are more investment options for your FUTURE!!
        </Link>
      </button>
    </>
  );
}

export default RothIra;
