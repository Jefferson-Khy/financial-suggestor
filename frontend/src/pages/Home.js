import React, { useState } from "react";
import EmploymentStatus from "../components/EmploymentStatus";
import Savings from "../components/Savings";
import NoSavings from "../components/NoSavings";
import Debt from "../components/Debt";
import PayOffDebt from "../components/PayOffDebt";
import Retirement from "../components/Retirement";
import RetirementContributions from "../components/RetirementContributions";
import HealthSavings from "../components/HealthSavings";
import HealthSavingsContributions from "../components/HealthSavingsContributions";
import RothIra from "../components/RothIra";
import OptionalInvestments from "../components/OptionalInvestments";
import "../index.css";

function Home() {
  const [pageToShow, setPageToShow] = useState("");

  function renderComponent() {
    switch (pageToShow) {
      case "savings":
        return (
          <Savings pageToShow={pageToShow} setPageToShow={setPageToShow} />
        );
      case "no savings":
        return (
          <NoSavings pageToShow={pageToShow} setPageToShow={setPageToShow} />
        );
      case "debt":
        return <Debt pageToShow={pageToShow} setPageToShow={setPageToShow} />;
      case "has debt":
        return (
          <PayOffDebt pageToShow={pageToShow} setPageToShow={setPageToShow} />
        );
      case "401k":
        return (
          <Retirement pageToShow={pageToShow} setPageToShow={setPageToShow} />
        );
      case "has 401k":
        return (
          <RetirementContributions
            pageToShow={pageToShow}
            setPageToShow={setPageToShow}
          />
        );
      case "HSA":
        return (
          <HealthSavings
            pageToShow={pageToShow}
            setPageToShow={setPageToShow}
          />
        );
      case "has HSA":
        return (
          <HealthSavingsContributions
            pageToShow={pageToShow}
            setPageToShow={setPageToShow}
          />
        );
      case "RothIra":
        return (
          <RothIra pageToShow={pageToShow} setPageToShow={setPageToShow} />
        );
      case "optional investments":
        return (
          <OptionalInvestments
            pageToShow={pageToShow}
            setPageToShow={setPageToShow}
          />
        );
      default:
        return (
          <EmploymentStatus
            pageToShow={pageToShow}
            setPageToShow={setPageToShow}
          />
        );
    }
  }
  return <>{renderComponent()}</>;
}

export default Home;
