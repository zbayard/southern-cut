import './Header.css';
import logo from './logo.png';
import video from './headervid.mp4';
import poster from './poster.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';

const Header = ()=>{

    return(
        <div id='home' className="header">
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo"/>
            </div>

            <div className="btn-box">
                <a href="#" className="btn btn-white btn-animated">Get a quote today</a>
            </div>

            <div className="arrow-box">
                <Link smooth={true} to="about" href="#">
                    <FontAwesomeIcon className="arrow" color="white" icon={faAngleDoubleDown} size="2x" />  
                </Link>
            </div>

            <video id='vid-header' poster={poster} autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    );

};
export default Header;