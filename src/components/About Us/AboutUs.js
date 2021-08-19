import './AboutUs.css';
import {Link} from 'react-scroll';

const AboutUs = ()=>{

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

            <div className="btn-box-about">
                <Link smooth={true} to="home" href="#">
                    <a href="#" className="btn btn-green btn-animated btn-about">Check out our services</a>
                </Link>
            </div>
        </div>
    );
};
export default AboutUs;