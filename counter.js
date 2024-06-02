//counter.js
import React, { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const [text, setText] = useState("");

  const textUpdate = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("숫자 변동 감지");
  }, [number]);

  useEffect(() => {
    console.log("글자 변동 감지");
  }, [text]);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
      <input type="text를 입력하세요." value={text} onChange={textUpdate}></input>
    </div>
  );
}

export default Counter;
