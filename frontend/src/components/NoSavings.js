import React from "react";
import { Link } from "react-router-dom";

function NoSavings({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };

  return (
    <>
      <h1>Save up at least 6 months of exspenses before moving on</h1>
      <h2>maybe insert money tracker here?</h2>
      <button type="button" onClick={handleClick}>
        I've saved up enough for 6 months of expenses incase of an emergency!
      </button>
    </>
  );
}

export default NoSavings;
