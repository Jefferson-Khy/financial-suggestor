import React from "react";
import { Link } from "react-router-dom";

function HealthSavings() {
  return (
    <>
      <h1>Do you have an HSA?</h1>
      <p>include link on what HSA is maybe?</p>
      <button type="button">
        <Link to="/HealthSavingsContributions">Yes</Link>
      </button>
      <button type="button">
        <Link to="/RothIra">No</Link>
      </button>
    </>
  );
}

export default HealthSavings;
