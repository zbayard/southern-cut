import './AboutUs.css';
import {Link} from 'react-scroll';

const AboutUs = ()=>{

    return (
        <div id="about" className="about-us">
            <div className="w-container">
                <div className="w-box what">
                    <h1 className="ws">what</h1>
                    <h2>What</h2>
                    <p>This is a sentence that will describe what southern cut does.</p>
                </div>
                <div className="w-box why">
                    <h1 className="ws">why</h1>
                    <h2>Why</h2>
                    <p>This is a sentence that will describe why southern cut does what they do.</p>
                </div>
                <div className="w-box where">
                    <h1 className="ws">where</h1>
                    <h2>Where</h2>
                    <p>This is a sentence that will describe where southern cut exists.</p>
                </div>
                <div className="w-box when">
                <h1 className="ws">when</h1>
                <h2>When</h2>
                    <p>This is a sentence that will describe when southern cut began.</p>
                </div>
            </div>

            <div className="btn-box-about">
                <Link smooth={true} to="services" href="#">
                    <a href="#" className="btn btn-green btn-animated btn-about">Check out our services</a>
                </Link>
            </div>
        </div>
    );
};
export default AboutUs;