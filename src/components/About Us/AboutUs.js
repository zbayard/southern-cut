import './AboutUs.css';
import {useState} from 'react';

const AboutUs = ()=>{

    const [hovering, setHovering] = useState(false)

    const isHovering = ()=>{
        console.log(hovering)

    }

    return (
        <div className="about-us">
            <div className="w-container">
                <div className="what-box">
                    <h1 className="ws">What</h1>
                </div>
                <div className="why-box">
                    <h1 className="ws">Why</h1>
                </div>
                <div className="where-box">
                    <h1 className="ws">Where</h1>
                </div>
                <div className="when-box">
                <h1 className="ws">When</h1>
                </div>
            </div>
           
        </div>
    );
};
export default AboutUs;