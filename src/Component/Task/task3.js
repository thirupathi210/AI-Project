import React, { useState } from 'react';
import './task3.css';

function Task3() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handler = (e) => {
    setInput(e.target.value);
  };

  const clearintervel=()=>{
    setInput('');
    setResult(0);
  }

  return (
    <div className="container">
      <div className="calculator">
        <h1>Welcome</h1>
        <input type="text" value={input} onChange={handler} /><br />
        <button className="result-button" onClick={() => setResult(eval(input))}>Result</button><br />
        <p class="resu">Result is: {result}</p>
        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + '2')}>2</button>
        <button onClick={() => setInput(input + '3')}>3</button>
        <button onClick={() => setInput(input + '4')}>4</button>
        <button onClick={() => setInput(input + '5')}>5</button>
        <button onClick={() => setInput(input + '6')}>6</button>
        <button onClick={() => setInput(input + '7')}>7</button>
        <button onClick={() => setInput(input + '8')}>8</button>
        <button onClick={() => setInput(input + '9')}>9</button>
        <button onClick={() => setInput(input + '0')}>0</button>
        <button onClick={() => setInput(input + '+')}>+</button>
        <button onClick={() => setInput(input + '-')}>-</button>
        <button onClick={() => setInput(input + '*')}>*</button>
        <button onClick={() => setInput(input + '/')}>/</button>
        <button className="clear-button" onClick={clearintervel}>Clear</button>
      </div>
    </div>
  );
}

export default Task3;
