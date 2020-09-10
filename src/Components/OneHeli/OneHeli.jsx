import React from 'react';
import {withRouter} from "react-router-dom";
import './OneHeli.scss';

function OneHeli({singleAircraft}) {
    return (
        <div className='OneHeli'>
            <img className='OneHeli__image' src={singleAircraft.image2} alt=""/>
            <h5 className='OneHeli__make'>Manufacture: {singleAircraft.manufacturer_code}</h5>
            <div className='OneHeli__modelNumber'>Model number: {singleAircraft.model_no}</div>
            <div className='OneHeli__modelName'>Model name: {singleAircraft.model_name}</div>
            <p className='OneHeli__overview'>{singleAircraft.overview}</p>
            <div className='OneHeli__specContainer'>
            <div className="OneHeli__length"><span className='OneHeli__specHeading'>Length:</span> {singleAircraft.length}</div>
            <div className="OneHeli__wingspan"><span className='OneHeli__specHeading'>Rotor span:</span> {singleAircraft.wingspan}</div>
            <div className="OneHeli__height"><span className='OneHeli__specHeading'>Height:</span> {singleAircraft.height}</div>
            <div className="OneHeli__power"><span className='OneHeli__specHeading'>Powerplant:</span> {singleAircraft.power}</div>
            <div className="OneHeli__maxSpeed"><span className='OneHeli__specHeading'>Max speed: </span> {singleAircraft.max_speed}</div>
            <div className="OneHeli__range"><span className='OneHeli__specHeading'>Range:</span> {singleAircraft.range}</div>
            <div className="OneHeli__aircraftUse"><span className='OneHeli__specHeading'>Aircraft use:</span> {singleAircraft.aircraft_use}</div>
            <div className="OneHeli__crew"><span className='OneHeli__specHeading'>Crew:</span> {singleAircraft.crew}</div>
            <div className="OneHeli__notice">*Notice: The contents listed on this page is intended for educational and informative purposes only, and was originally created for a school project. Information and pictures are from Canada's Department of National Defence.*</div>
            </div>
        </div>

    )
}
export default withRouter(OneHeli);