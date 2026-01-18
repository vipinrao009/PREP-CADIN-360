import React from "react";

function Debounce() {
  const ourDebounce = (fn, delay) => {
    let timer;

    return (...arg) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...arg);
      }, delay);
    };
  };

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  const debounceChange = ourDebounce(handleInput, 300);

  return (
    <div>
      <input onChange={debounceChange} placeholder="Type something..." />
    </div>
  );
}

export default Debounce;
