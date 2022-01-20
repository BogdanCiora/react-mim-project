import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import EffectsManager from './components/EffectsManager';
import React, { useState } from "react";

function App() {

  const options = [
    'Sliding effect', 'Zoom in effect', 'Zoom out effect', 'Fade effect'
  ];

  const [currentEffectSelection, setEffectSelection] = useState("None");

  return (
    <div>
      <Dropdown className='dropdown-adjustments' onChange={(e) => setEffectSelection(e.value)} options={options} placeholder="Select an option"/>

      <EffectsManager currentEffectSelection={currentEffectSelection} />
    </div>
  );

}

export default App;
