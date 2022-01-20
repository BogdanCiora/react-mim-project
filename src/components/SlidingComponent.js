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
        indicators: true
    }

    const [autoplay, setAutoplay] = useState(true);

    return (

        <div>

            <div>
                <Slide easing="ease" autoplay={autoplay} {...slidingPaarameters}>
                    <div class="each-slide">
                        <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + slideImages[0] + ".jpg")} />
                    </div>
                    <div class="each-slide">
                        <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + slideImages[1] + ".jpg")} />
                    </div>
                    <div class="each-slide">
                        <img style={{ width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + slideImages[2] + ".jpg")} />
                    </div>
                </Slide>
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
    )
};

export default SlidingComponent;