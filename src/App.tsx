import "./App.css";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    setDisplayValue(displayValue === "0" ? num : displayValue + num);
  };

  const handleOperator = (op: string) => {
    setOperator(op);
    setPreviousValue(displayValue);
    setDisplayValue("0");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  const handleSpecial = (action: string) => {
    const current = parseFloat(displayValue);
    if (action === "+/-") {
      setDisplayValue(String(current * -1));
    } else if (action === "%") {
      setDisplayValue(String(current / 100));
    }
  };

  const handleEquals = () => {
    if (!previousValue || !operator) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    setDisplayValue(String(result));
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator-app">
      <h1>CALCULATOR</h1>

      <div className="calculator">
        <div className="display">{displayValue}</div>

        <div className="buttons">
          <button className="btn function" onClick={handleClear}>
            C
          </button>
          <button className="btn function" onClick={() => handleSpecial("+/-")}>
            +/-
          </button>
          <button className="btn function" onClick={() => handleSpecial("%")}>
            %
          </button>
          <button className="btn operator" onClick={() => handleOperator("/")}>
            /
          </button>

          <button className="btn number" onClick={() => handleNumber("7")}>
            7
          </button>
          <button className="btn number" onClick={() => handleNumber("8")}>
            8
          </button>
          <button className="btn number" onClick={() => handleNumber("9")}>
            9
          </button>
          <button className="btn operator" onClick={() => handleOperator("x")}>
            X
          </button>

          <button className="btn number" onClick={() => handleNumber("4")}>
            4
          </button>
          <button className="btn number" onClick={() => handleNumber("5")}>
            5
          </button>
          <button className="btn number" onClick={() => handleNumber("6")}>
            6
          </button>
          <button
            className="btn operator active"
            onClick={() => handleOperator("-")}
          >
            -
          </button>

          <button className="btn number" onClick={() => handleNumber("1")}>
            1
          </button>
          <button className="btn number" onClick={() => handleNumber("2")}>
            2
          </button>
          <button className="btn number" onClick={() => handleNumber("3")}>
            3
          </button>
          <button className="btn operator" onClick={() => handleOperator("+")}>
            +
          </button>

          <button className="btn number" onClick={() => handleNumber("0")}>
            0
          </button>
          <button className="btn number" onClick={() => handleNumber(".")}>
            .
          </button>
          <button className="btn equals" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>

      <p className="watermark">Practicing React Project by Luqman Hayyan</p>
    </div>
  );
}

export default App;
