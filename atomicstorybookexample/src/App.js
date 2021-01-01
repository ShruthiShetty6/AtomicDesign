import React from "react";
import HomePage from "./components/templates/home";
import view from "./components/templates/home/style.css";

function App() {
  return (
    <div className={view.default}>
      <div className={view.col1}>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
