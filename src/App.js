import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import EffectsManager from './components/EffectsManager';
import React, { useState } from "react";

function App() {

  const options = [
    'Main page', 'Sliding effect', 'Zoom in effect', 'Zoom out effect', 'Fade effect'
  ];

  const [currentEffectSelection, setEffectSelection] = useState("None");

  return (
    <div style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/139446/pexels-photo-139446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}>
      <Dropdown className='dropdown-adjustments' onChange={(e) => setEffectSelection(e.value)} options={options} placeholder="Select an option"/>

      <EffectsManager currentEffectSelection={currentEffectSelection} />
    </div>
  );

}

export default App;
