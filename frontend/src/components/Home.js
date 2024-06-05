import React, { useState } from "react";
import Savings from "./Savings";
import NoSavings from "./NoSavings";
import Debt from "./Debt";
import PayOffDebt from "./PayOffDebt";
import Retirement from "./Retirement";
import RetirementContributions from "./RetirementContributions";
import HealthSavings from "./HealthSavings";
import HealthSavingsContributions from "./HealthSavingsContributions";
import RothIra from "./RothIra";
import OptionalInvestments from "./OptionalInvestments";
import "../index.css";

function Home() {
  const [step, setStep] = useState(0);
  const [noSavings, setNoSavings] = useState(false);
  const [debt, setDebt] = useState(false);
  const [retirement, setRetirement] = useState(true);
  const [healthSavings, setHealthSavings] = useState(true);

  const handleClick = () => {
    setStep(step + 1);
  };

  if (step == 1 && noSavings == false) {
    return (
      <Savings
        financeStep={step}
        setFinanceStep={setStep}
        noSavings={noSavings}
        setNoSavings={setNoSavings}
      />
    );
  } else if (step == 1 && noSavings == true) {
    return <NoSavings financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 2 && debt == false) {
    return (
      <Debt
        financeStep={step}
        setFinanceStep={setStep}
        debt={debt}
        setDebt={setDebt}
      />
    );
  } else if (step == 2 && debt == true) {
    return <PayOffDebt financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 3 && retirement == true) {
    return (
      <Retirement
        financeStep={step}
        setFinanceStep={setStep}
        retirement={retirement}
        setRetirement={setRetirement}
      />
    );
  } else if (step == 3 && retirement == false) {
    return (
      <RetirementContributions financeStep={step} setFinanceStep={setStep} />
    );
  } else if (step == 4 && healthSavings == true) {
    return (
      <HealthSavings
        financeStep={step}
        setFinanceStep={setStep}
        healthSavings={healthSavings}
        setHealthSavings={setHealthSavings}
      />
    );
  } else if (step == 4 && healthSavings == false) {
    return (
      <HealthSavingsContributions financeStep={step} setFinanceStep={setStep} />
    );
  } else if (step == 5) {
    return <RothIra financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 6) {
    return <OptionalInvestments financeStep={step} setFinanceStep={setStep} />;
  }
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

export default Home;
