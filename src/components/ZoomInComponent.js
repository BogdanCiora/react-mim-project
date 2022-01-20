import React, { useState } from 'react';
import { Zoom } from 'react-slideshow-image';

const ZoomInComponent = () => {

    const images = [
        "slide4",
        "slide5",
        "slide6"
    ];

    const zoomInProperties = {
        indicators: true,
        scale: 1.4,
        pauseOnHover: true
    }

    const [autoplay, setAutoplay] = useState(true);

    return (

        <div>
            <div>
                <Zoom autoplay={autoplay} {...zoomInProperties}>
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

export default ZoomInComponent;
