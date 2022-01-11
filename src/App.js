import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import EffectsManager from './components/EffectsManager';
import React, { useState } from "react";

function App() {

  const options = [
    'Zoom in effect', 'Zoom put effect', 'Fade effect'
  ];
  const defaultOption = options[0];

  const [currentEffectSelection, setEffectSelection] = useState("None");

  return (
    <div>
      <Dropdown onChange={(e) => setEffectSelection(e.value)} options={options} placeholder="Select an option"/>

      <EffectsManager currentEffectSelection={currentEffectSelection} />
    </div>
  );

}

export default App;
