import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Savings from "./components/Savings";
import NoSavings from "./components/NoSavings";
import Debt from "./components/Debt";
import PayOffDebt from "./components/PayOffDebt";
import Retirement from "./components/Retirement";
import RetirementContributions from "./components/RetirementContributions";
import HealthSavings from "./components/HealthSavings";
import HealthSavingsContributions from "./components/HealthSavingsContributions";
import RothIra from "./components/RothIra";
import OptionalInvestments from "./components/OptionalInvestments";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Savings" element={<Savings />}></Route>
        <Route path="/NoSavings" element={<NoSavings />}></Route>
        <Route path="/Debt" element={<Debt />}></Route>
        <Route path="/PayOffDebt" element={<PayOffDebt />}></Route>
        <Route path="/Retirement" element={<Retirement />}></Route>
        <Route
          path="/RetirementContributions"
          element={<RetirementContributions />}
        ></Route>
        <Route path="/HealthSavings" element={<HealthSavings />}></Route>
        <Route
          path="/HealthSavingsContributions"
          element={<HealthSavingsContributions />}
        ></Route>
        <Route path="/RothIra" element={<RothIra />}></Route>
        <Route
          path="/OptionalInvestments"
          element={<OptionalInvestments />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
