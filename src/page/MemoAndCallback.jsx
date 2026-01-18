import React, { useState, useMemo, useCallback } from "react";

function MemoAndCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function heavy() {
    console.log("Heavy calculation running...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1; // heavy loop
    }
    return result;
  }

  // 🧮 useMemo Example
  const expensiveCalculation = useMemo(() => { return heavy()}, []); // sirf ek baar chalega

  // 🎯 useCallback Example
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // function ka reference same rahega

  const handleClick1 = ()=>{
    console.log("Button clicked!");
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h3>Expensive Result: {expensiveCalculation}</h3>

      <input
        style={{border:"2px solid green"}}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <ChildComponent onClick={handleClick} />
    </div>
  );
}

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default MemoAndCallback;

