import React, { useState } from "react";
import { Link } from "react-router-dom";
import Savings from "./Savings";
import NoSavings from "./NoSavings";
import Debt from "./Debt";
// import PayOffDebt from "./PayOffDebt";
import Retirement from "./Retirement";
// import RetirementContributions from "./RetirementContributions";
import HealthSavings from "./HealthSavings";
// import HealthSavingsContributions from "./HealthSavingsContributions";
import RothIra from "./RothIra";
import OptionalInvestments from "./OptionalInvestments";

function Home() {
  const [step, setStep] = useState(0);
  const [noSavings, setNoSavings] = useState(false);
  const [debt, setDebt] = useState(false);
  const [retirement, setRetirement] = useState(false);
  const [healthSavings, setHealthSavings] = useState(false);
  const [rothIra, setRothIra] = useState(false);

  const handleClick = () => {
    setStep(step + 1);
  };

  if (step == 1) {
    return (
      <Savings
        financeStep={step}
        setFinanceStep={setStep}
        noSavings={noSavings}
        setNoSavings={setNoSavings}
      />
    );
  } else if (noSavings == true) {
    return <NoSavings financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 2) {
    return <Debt financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 3) {
    return <Retirement financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 4) {
    return <HealthSavings financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 5) {
    return <RothIra financeStep={step} setFinanceStep={setStep} />;
  } else if (step == 6) {
    return <OptionalInvestments financeStep={step} setFinanceStep={setStep} />;
  }
  return (
    <>
      <h1>Are you student or working professional?</h1>
      <button type="button" onClick={handleClick}>
        Student
      </button>
      <button type="button" onClick={handleClick}>
        Working Professional
      </button>
    </>
  );
}

export default Home;
