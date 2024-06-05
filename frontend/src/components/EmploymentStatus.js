import React from "react";

function EmploymentStatus({ financeStep, setFinanceStep }) {
  const handleClick = () => {
    setFinanceStep(financeStep + 1);
  };
  return (
    <>
      <div className="question-container">
        <h1>Are you Student or Career Professional?</h1>
      </div>
      <div className="btn-container">
        <button id="student-btn" type="button" onClick={handleClick}>
          <strong>Student</strong>
        </button>
        <button id="prof-btn" type="button" onClick={handleClick}>
          <strong>Career Professional</strong>
        </button>
      </div>
    </>
  );
}
export default EmploymentStatus;
