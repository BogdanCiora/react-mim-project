import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlidingComponent = () => {

    const slideImages = [
        'slide1',
        'slide2',
        'slide3'
    ];

    const slidingPaarameters = {
        indicators: true,
        duration: 2500
    }

    const [autoplay, setAutoplay] = useState(true);

    return (

        <div>

            <div>
                <Slide easing="ease" autoplay={autoplay} {...slidingPaarameters}>
                    <div className="each-slide">
                        <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + slideImages[0] + ".jpg")} />
                    </div>
                    <div className="each-slide">
                        <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + slideImages[1] + ".jpg")} />
                    </div>
                    <div className="each-slide">
                        <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + slideImages[2] + ".jpg")} />
                    </div>
                </Slide>
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
    )
};

export default SlidingComponent;