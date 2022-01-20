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
        scale: 0.4
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
}

export default ZoomOutComponent;