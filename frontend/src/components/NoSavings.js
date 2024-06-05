import React from "react";

function NoSavings({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };

  return (
    <>
      <div className="question-container">
        <h1>Save up at least 6 months of exspenses before moving on</h1>
      </div>
      <h2>maybe insert money tracker here?</h2>
      <div className="question-container">
        <button type="button" onClick={handleClick}>
          I've saved up enough for 6 months of expenses incase of an emergency!
        </button>
      </div>
    </>
  );
}

export default NoSavings;
