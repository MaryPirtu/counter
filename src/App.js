import React from "react";

import Button from "./components/Button";
import Counter from "./Counter";
function App() {
  return (
    <div className="flex">
      <Counter step={1} />
      <Counter />
      <Counter step={3} />
    </div>
  );
}

export default App;
