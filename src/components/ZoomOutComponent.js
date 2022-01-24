import React, { useState } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ZoomOutComponent = () => {
    const images = [
        "slide7",
        "slide8",
        "slide9"
    ];

    const zoomOutProperties = {
        indicators: true,
        scale: 0.4,
        duration: 2500
    }

    const [autoplay, setAutoplay] = useState(true);

    return (

        <div>

            <div>
                <Zoom {...zoomOutProperties}>
                    {images.map((each, index) => (
                        <div key={index} style={{ width: "100%" }}>
                            <img style={{ objectFit: "cover", width: "50%", paddingLeft: "25%", paddingTop: "3%" }} src={require("../images/" + each + ".jpg")} />
                        </div>
                    ))}
                </Zoom>
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
}

export default ZoomOutComponent;