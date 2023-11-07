import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import EthreumDiff from "./components/EthreumDiff";

function App() {
  return (
    <>
      <div className="container">
        <EthreumDiff />
        <CurrencyConverter />
      </div>
    </>
  );
}

export default App;
