import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './style.css';

function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handlerclick = (buttonName) => setState(({ obj }) => ({ obj: calculate(obj, buttonName) }));
  return (
    <>
      <div className="calculater-grid">
        <div className="previous-operand">
          {state.obj.next || state.obj.total || 0}
        </div>
        <button type="submit" onClick={() => handlerclick('AC')}>
          AC
        </button>
        <button type="submit" onClick={() => handlerclick('+/-')}>
          +/-
        </button>
        <button type="submit" onClick={() => handlerclick('%')}>
          %
        </button>
        <button
          className="calculations"
          type="submit"
          onClick={() => handlerclick('÷')}
        >
          ÷
        </button>
        <button type="submit" onClick={() => handlerclick('7')}>
          7
        </button>
        <button type="submit" onClick={() => handlerclick('8')}>
          8
        </button>
        <button type="submit" onClick={() => handlerclick('9')}>
          9
        </button>
        <button
          className="calculations"
          type="submit"
          onClick={() => handlerclick('x')}
        >
          x
        </button>
        <button type="submit" onClick={() => handlerclick('4')}>
          4
        </button>
        <button type="submit" onClick={() => handlerclick('5')}>
          5
        </button>
        <button type="submit" onClick={() => handlerclick('6')}>
          6
        </button>
        <button
          className="calculations"
          type="submit"
          onClick={() => handlerclick('-')}
        >
          -
        </button>
        <button type="submit" onClick={() => handlerclick('1')}>
          1
        </button>
        <button type="submit" onClick={() => handlerclick('2')}>
          2
        </button>
        <button type="submit" onClick={() => handlerclick('3')}>
          3
        </button>
        <button
          className="calculations"
          type="submit"
          onClick={() => handlerclick('+')}
        >
          +
        </button>
        <button
          className="number-0"
          type="submit"
          onClick={() => handlerclick('0')}
        >
          0
        </button>
        <button type="submit" onClick={() => handlerclick('.')}>
          .
        </button>
        <button
          className="calculations"
          type="submit"
          onClick={() => handlerclick('=')}
        >
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;
