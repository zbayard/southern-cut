import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = ()=>{
    return(
        <header className="navbar">
            <nav className='navbar-nav'>
                <div></div>
                <div className="nav-logo">
                    <a href="/">southern cut</a>
                </div>
                <div className="spacer"/>
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link smooth={true} to="home" className="nav-link" href="#">Home </Link>
                        </li>
                        <li>
                            <Link smooth={true} to="about" href="#">About Us</Link>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Gallery</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <a href="/">Home</a> */}
            {/* <a href="/">About us</a> */}
            {/* <span className="sr-only">(current)</span> */}
        </header>
    )
};
export default Navbar;