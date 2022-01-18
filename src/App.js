import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import EffectsManager from './components/EffectsManager';
import React, { useState } from "react";

function App() {

  const options = [
    'Sliding effect', 'Zoom in effect', 'Zoom out effect', 'Fade effect'
  ];
  const defaultOption = options[0];

  const [currentEffectSelection, setEffectSelection] = useState("None");

  return (
    <div>
      <Dropdown style = {{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px" }}
       onChange={(e) => setEffectSelection(e.value)} options={options} placeholder="Select an option"/>

      <EffectsManager currentEffectSelection={currentEffectSelection} />
    </div>
  );

}

export default App;
