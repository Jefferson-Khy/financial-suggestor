import React from "react";

function EmploymentStatus({ pageToShow, setPageToShow }) {
  const handleClick = () => {
    setPageToShow("savings");
  };
  return (
    <div className="card">
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
    </div>
  );
}
export default EmploymentStatus;
