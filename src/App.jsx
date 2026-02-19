import { useState } from "react";
import "./App.css";
import { add, divide, multiply, subtract} from '@warhe8d/continuous-integration-playground'

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(add(numA, numB));
        break;
      case "-":
        setResult(subtract(numA, numB));
        break;
      case "*":
        setResult(multiply(numA, numB));
        break;
      case "/":
        setResult(divide(numB !== 0 ? (numA , numB) : "Cannot divide by zero"));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter a"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")} style={{ marginLeft: "5px" }}>
          -
        </button>
        <button onClick={() => calculate("*")} style={{ marginLeft: "5px" }}>
          *
        </button>
        <button onClick={() => calculate("/")} style={{ marginLeft: "5px" }}>
          /
        </button>
      </div>

      {result !== null && (
        <h3 style={{ marginTop: "20px" }}>Result: {result}</h3>
      )}
    </div>
  );
}

export default App;