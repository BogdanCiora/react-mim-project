import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  'slide1',
  'slide2',
  'slide3'
];

const SlidingComponent = () => {
    return (
        <div>
            <Slide easing="ease">
                <div class="each-slide">
                    <img style={{ width: "60%", paddingLeft: "20%", paddingTop: "3%" }} src={require("../images/" + slideImages[0] + ".jpg")} />
                </div>
                <div class="each-slide">
                    <img style={{ width: "60%", paddingLeft: "20%", paddingTop: "3%" }} src={require("../images/" + slideImages[1] + ".jpg")} />
                </div>
                <div class="each-slide">
                    <img style={{ width: "60%", paddingLeft: "20%", paddingTop: "3%" }} src={require("../images/" + slideImages[2] + ".jpg")} />
                </div>
            </Slide>
        </div>
    )
};

export default SlidingComponent;