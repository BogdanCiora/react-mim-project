import React from 'react';
import ZoomInComponent from './ZoomInComponent';
import ZoomOutComponent from './ZoomOutComponent';
import FadeComponent from './FadeComponent';
import SlidingComponent from './SlidingComponent';

function EffectsManager(props) {

    console.log(props.currentEffectSelection);

    const dispatchSelectionToComponent = () => {
        switch(props.currentEffectSelection) {

            case "Sliding effect":

                return <SlidingComponent />

            case "Zoom in effect": 

                return <ZoomInComponent />

            case "Zoom out effect":

                return <ZoomOutComponent />

            case "Fade effect":

                return <FadeComponent />

            default: return <h1>No component match</h1>
        }
    }

    return (
        <div>
            { dispatchSelectionToComponent() }
        </div>
    )
}

export default EffectsManager