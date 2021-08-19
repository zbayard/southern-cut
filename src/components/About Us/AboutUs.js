import './AboutUs.css';
import {useState} from 'react';

const AboutUs = ()=>{

    const [hovering, setHovering] = useState(false)

    const isHovering = ()=>{
        console.log(hovering)

    }

    return (
        <div id="about" className="about-us">
            <div className="w-container">
                <div className="w-box what">
                    <h1 className="ws">What</h1>
                    <h2>What</h2>
                    <p>some bullshit in here</p>
                </div>
                <div className="w-box why">
                    <h1 className="ws">Why</h1>
                    <h2>Why</h2>
                    <p>some bullshit in here</p>
                </div>
                <div className="w-box where">
                    <h1 className="ws">Where</h1>
                    <h2>Where</h2>
                    <p>some bullshit in here</p>
                </div>
                <div className="w-box when">
                <h1 className="ws">When</h1>
                <h2>When</h2>
                    <p>some bullshit in here</p>
                </div>
            </div>
           
        </div>
    );
};
export default AboutUs;