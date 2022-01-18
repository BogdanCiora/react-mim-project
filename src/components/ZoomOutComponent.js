import React from 'react';
import { Zoom } from 'react-slideshow-image';

const ZoomOutComponent = () => {
    const images = [
        "slide4",
        "slide5",
        "slide6"
    ];

    const zoomOutProperties = {
        indicators: true,
        scale: 0.4
    }
    return (
        <div>
            <Zoom {...zoomOutProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "70%" }}>
                        <img style={{ objectFit: "cover", width: "50%" }} src={require("../images/" + each + ".jpg")} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default ZoomOutComponent;