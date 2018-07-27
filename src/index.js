import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import './index.scss';

const Index = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));