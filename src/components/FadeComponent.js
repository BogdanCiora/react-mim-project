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
    indicators: true,
    duration: 2500
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
        <div className="autoplay-buttons autoplay-buttons-text">
          Autoplay is {autoplay ? 'on' : 'off'}
        </div>
        <div className="autoplay-buttons autoplay-buttons-position">
          <button type="button" className='button-play' onClick={() => setAutoplay(true)}>Play</button>
          <button type="button" className='button-pause' onClick={() => setAutoplay(false)}>Pause</button>
        </div>
      </div>

    </div>

  );
};

export default FadeComponent;