import React from 'react';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="calculater-grid">
          <div className="previous-operand">
            <input className="value" type="text" />
          </div>
          <button type="submit">AC</button>
          <button type="submit">+/-</button>
          <button type="submit">%</button>
          <button className="calculations" type="submit">
            ÷
          </button>
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button className="calculations" type="submit">
            ×
          </button>
          <button type="submit">4</button>
          <button type="submit">5</button>
          <button type="submit">6</button>
          <button className="calculations" type="submit">
            -
          </button>
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button className="calculations" type="submit">
            +
          </button>
          <button className="number-0" type="submit">
            0
          </button>
          <button type="submit">.</button>
          <button className="calculations" type="submit">
            =
          </button>
        </div>
      </>
    );
  }
}
export default Calculator;
