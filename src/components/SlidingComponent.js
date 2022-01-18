import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../styling/styling.css'

const slideImages = [
  'slide1',
  'slide2',
  'slide3'
];

const SlidingComponent = () => {
    return (
        <div style={{ width: "50%" }}>
            <Slide easing="ease">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundSize: "cover", height: "350px" }}>
                    <img style={{ width: "50%" }} src={require("../images/" + slideImages[0] + ".jpg")} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundSize: "cover", height: "350px" }}>
                    <img style={{ width: "50%" }} src={require("../images/" + slideImages[1] + ".jpg")} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundSize: "cover", height: "350px" }}>
                    <img style={{ width: "50%" }} src={require("../images/" + slideImages[2] + ".jpg")} />
                </div>
            </Slide>
        </div>
    )
};

export default SlidingComponent;