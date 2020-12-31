import React from "react";
import Feature from "./components/organisms/feature";
import Subtitle from './components/atoms/subtitle';
import Title from './components/atoms/title';
import view from "./components/templates/default/style.css";

function App() {
  return (
    <div className={view.default}>
      <div className={view.col1}>
        <Subtitle>Atoms in philosophy</Subtitle>
        <Title>Atoms in philosophy</Title>
      </div>
    </div>
  );
}

export default App;
