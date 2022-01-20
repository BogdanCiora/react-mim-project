import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const FadeComponent = () => {

  const fadeImages = [
    "slide10",
    "slide11",
    "slide12"
  ];

  const fadeProperties = {
    indicators: true
  }

  const [autoplay, setAutoplay] = useState(true);

  return (

    <div>

      <div>
        <Fade autoplay={autoplay} {...fadeProperties}>
          <div className="each-fade">
            <div>
              <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + fadeImages[0] + ".jpg")} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + fadeImages[1] + ".jpg")} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + fadeImages[2] + ".jpg")} />
            </div>
          </div>
        </Fade>
      </div>

      <div className='buttons-position'>
        <div className="autoplay-buttons">
          Autplay is {autoplay ? 'on' : 'off'}
        </div>
        <div className="autoplay-buttons">
          <button type="button" onClick={() => setAutoplay(false)}>Pause</button>
          <button type="button" onClick={() => setAutoplay(true)}>Play</button>
        </div>
      </div>

    </div>

  );
};

export default FadeComponent;