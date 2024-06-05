import React, { useState } from "react";
import EmploymentStatus from "./EmploymentStatus";
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

  if (step == 1 && noSavings == false) {
    return (
      <div className="card">
        <Savings
          financeStep={step}
          setFinanceStep={setStep}
          noSavings={noSavings}
          setNoSavings={setNoSavings}
        />
      </div>
    );
  } else if (step == 1 && noSavings == true) {
    return (
      <div className="card">
        <NoSavings financeStep={step} setFinanceStep={setStep} />
      </div>
    );
  } else if (step == 2 && debt == false) {
    return (
      <div className="card">
        <Debt
          financeStep={step}
          setFinanceStep={setStep}
          debt={debt}
          setDebt={setDebt}
        />
      </div>
    );
  } else if (step == 2 && debt == true) {
    return (
      <div className="card">
        <PayOffDebt financeStep={step} setFinanceStep={setStep} />
      </div>
    );
  } else if (step == 3 && retirement == true) {
    return (
      <div className="card">
        <Retirement
          financeStep={step}
          setFinanceStep={setStep}
          retirement={retirement}
          setRetirement={setRetirement}
        />
      </div>
    );
  } else if (step == 3 && retirement == false) {
    return (
      <div className="card">
        <RetirementContributions financeStep={step} setFinanceStep={setStep} />
      </div>
    );
  } else if (step == 4 && healthSavings == true) {
    return (
      <div className="card">
        <HealthSavings
          financeStep={step}
          setFinanceStep={setStep}
          healthSavings={healthSavings}
          setHealthSavings={setHealthSavings}
        />
      </div>
    );
  } else if (step == 4 && healthSavings == false) {
    return (
      <div className="card">
        <HealthSavingsContributions
          financeStep={step}
          setFinanceStep={setStep}
        />
      </div>
    );
  } else if (step == 5) {
    return (
      <div className="card">
        <RothIra financeStep={step} setFinanceStep={setStep} />
      </div>
    );
  } else if (step == 6) {
    return (
      <div className="card">
        <OptionalInvestments financeStep={step} setFinanceStep={setStep} />
      </div>
    );
  }
  return (
    <div className="card">
      <EmploymentStatus financeStep={step} setFinanceStep={setStep} />
    </div>
  );
}

export default Home;
