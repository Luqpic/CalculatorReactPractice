import "./App.css";

function App() {
  return (
    <div className="calculator-app">
      <h1>CALCULATOR</h1>

      <div className="calculator">
        <div className="display">123456789.0</div>

        <div className="buttons">
          <button className="btn function">C</button>
          <button className="btn function">+/-</button>
          <button className="btn function">%</button>
          <button className="btn operator">/</button>

          <button className="btn number">7</button>
          <button className="btn number">8</button>
          <button className="btn number">9</button>
          <button className="btn operator">X</button>

          <button className="btn number">4</button>
          <button className="btn number">5</button>
          <button className="btn number">6</button>
          <button className="btn operator active">-</button>

          <button className="btn number">1</button>
          <button className="btn number">2</button>
          <button className="btn number">3</button>
          <button className="btn operator">+</button>

          <button className="btn number">0</button>
          <button className="btn number">.</button>
          <button className="btn equals">=</button>
        </div>
      </div>

      <p className="watermark">Practicing React Project by Luqman Hayyan</p>
    </div>
  );
}

export default App;
