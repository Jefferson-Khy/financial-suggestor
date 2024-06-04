import React from "react";
import { Link } from "react-router-dom";

function HealthSavingsContributions() {
  return (
    <>
      <h1>
        you want to max out the annoual contribution here its relatively low
        here is the annual contribution limit
      </h1>
      <a href="https://www.irs.gov/publications/p969">
        HSA annual contribution limit here
      </a>
      <button type="button">
        <Link to="/RothIra">I've maxed my HSA contributions</Link>
      </button>
    </>
  );
}

export default HealthSavingsContributions;
