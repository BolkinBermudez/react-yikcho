import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."].forEach(item => {
    calcBtns.push(
      <button
        onClick={e => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* botón clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>

        {/* botón clear  */}
        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>
      </div>
      <div className="operations subgrid">
        {/*  botón súma */}
        <button onClick={e => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* botón resta */}
        <button onClick={e => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        {/* botón multiplica */}
        <button onClick={e => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>

        {/* botón divide */}
        <button onClick={e => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>

        {/* botón igúal */}
        <button
          onClick={e => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}
