import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };
  return (
    <div className="App">
      <h1>Using useREf to access underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>Focus Input </button>
    </div>
  );
}
