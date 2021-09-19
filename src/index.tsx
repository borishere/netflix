import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const HelloWorld: React.FC = () => {
  return (
    <h1>
d      Hello World
    </h1>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));