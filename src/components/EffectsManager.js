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

            default: return (
                <div className='main-page-content'>
                    <h1 className='main-page-text main-page-first-text'>Proiect</h1>
                    <h1 className='main-page-text main-page-second-text'>Managementul informației și multimedia</h1>
                    <h1 className='main-page-text main-page-third-text'>Ciora Bogdan</h1>
                </div>
            );
        }
    }

    return (
        <div>
            { dispatchSelectionToComponent() }
        </div>
    )
}

export default EffectsManager