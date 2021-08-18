import './Navbar.css';

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
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About us</a>
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
        </header>
    )
};
export default Navbar;