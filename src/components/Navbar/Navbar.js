import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = ()=>{
    
    return(
        <header className="navbar">
            <nav className='navbar-nav'>
                <div></div>
                <div className="nav-logo">
                    <Link smooth={true} to="home" href="#">Southern Cut</Link>
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
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;