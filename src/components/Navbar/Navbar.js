import './Navbar.css';
import logo from './logonav.png'
import {Link} from 'react-scroll';

const Navbar = ()=>{
    
    return(
        <header className="navbar">
            <nav className='navbar-nav'>
                <div></div>
                <div className="nav-logo">
                    <Link smooth={true} to="home" href="#"><img src={logo} alt="Southern Cut"></img></Link>
                </div>
                
                <div className="spacer"/>
                
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link smooth={true} to="home" href="#">Home </Link>
                        </li>
                        <li>
                            <Link smooth={true} to="about" href="#">About Us</Link>
                        </li>
                        <li>
                            <Link smooth={true} to="service" href="#">Services</Link>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <Link smooth={true} to="contact" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;