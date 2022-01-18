import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../styling/styling.css'

const ZoomInComponent = () => {
    const images = [
        "slide1",
        "slide2",
        "slide3"
    ];

    const zoomInProperties = {
        indicators: true,
        scale: 1.4
    }
    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "70%" }}>
                        <img style={{ objectFit: "cover", width: "50%" }} src={require("../images/" + each + ".jpg")} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default ZoomInComponent;
