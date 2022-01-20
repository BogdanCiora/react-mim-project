import React from 'react';
import { Zoom } from 'react-slideshow-image';

const ZoomInComponent = () => {
    const images = [
        "slide4",
        "slide5",
        "slide6"
    ];

    const zoomInProperties = {
        indicators: true,
        scale: 1.4
    }
    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "60%", paddingLeft: "20%", paddingTop: "3%" }} src={require("../images/" + each + ".jpg")} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default ZoomInComponent;
