import React from 'react';
import './style.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handlerclick = this.handlerclick.bind(this);
  }

  handlerclick(buttonName) {
    const { obj } = this.state;
    this.setState({ obj: calculate(obj, buttonName) });
  }

  render() {
    const { obj } = this.state;
    return (
      <>
        <div className="calculater-grid">
          <div className="previous-operand">{obj.next || obj.total || 0}</div>
          <button type="submit" onClick={() => this.handlerclick('AC')}>
            AC
          </button>
          <button type="submit" onClick={() => this.handlerclick('+/-')}>
            +/-
          </button>
          <button type="submit" onClick={() => this.handlerclick('%')}>
            %
          </button>
          <button
            className="calculations"
            type="submit"
            onClick={() => this.handlerclick('÷')}
          >
            ÷
          </button>
          <button type="submit" onClick={() => this.handlerclick('7')}>
            7
          </button>
          <button type="submit" onClick={() => this.handlerclick('8')}>
            8
          </button>
          <button type="submit" onClick={() => this.handlerclick('9')}>
            9
          </button>
          <button
            className="calculations"
            type="submit"
            onClick={() => this.handlerclick('×')}
          >
            ×
          </button>
          <button type="submit" onClick={() => this.handlerclick('4')}>
            4
          </button>
          <button type="submit" onClick={() => this.handlerclick('5')}>
            5
          </button>
          <button type="submit" onClick={() => this.handlerclick('6')}>
            6
          </button>
          <button
            className="calculations"
            type="submit"
            onClick={() => this.handlerclick('-')}
          >
            -
          </button>
          <button type="submit" onClick={() => this.handlerclick('1')}>
            1
          </button>
          <button type="submit" onClick={() => this.handlerclick('2')}>
            2
          </button>
          <button type="submit" onClick={() => this.handlerclick('3')}>
            3
          </button>
          <button
            className="calculations"
            type="submit"
            onClick={() => this.handlerclick('+')}
          >
            +
          </button>
          <button
            className="number-0"
            type="submit"
            onClick={() => this.handlerclick('0')}
          >
            0
          </button>
          <button type="submit" onClick={() => this.handlerclick('.')}>
            .
          </button>
          <button
            className="calculations"
            type="submit"
            onClick={() => this.handlerclick('=')}
          >
            =
          </button>
        </div>
      </>
    );
  }
}
export default Calculator;
