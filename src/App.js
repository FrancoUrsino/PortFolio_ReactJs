import React from "react";
import Home from "./Home";
import Background from "./Background";

function App() {
  return (
    <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-neutral-800 relative">
      <Background/>
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
    </div>
  );
}

export default App;
