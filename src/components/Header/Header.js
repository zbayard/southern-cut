import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'



const Header = ()=>{

    return(
        <div className="header">
            <div className="logo-box">
                <img src="" alt="Logo" className="logo"/>
            </div>
            <a href="#" className="btn btn-white btn-animated">Get a quote today</a>

            <div className="arrow-box">
                <FontAwesomeIcon className="arrow" icon={faAngleDoubleDown}  />
            </div>

        </div>
    )

};
export default Header;