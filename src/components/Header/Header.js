import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'



const Header = ()=>{

    return(
        <div id='home' className="header">
            <div className="logo-box">
                <img src="" alt="Logo" className="logo"/>
            </div>

            <div className="btn-box">
                <a href="#" className="btn btn-white btn-animated">Get a quote today</a>

            </div>

            

            <div className="arrow-box">
                <FontAwesomeIcon className="arrow" color="white" icon={faAngleDoubleDown} size="2x" />
            </div>

        </div>
    )

};
export default Header;