const Navbar = ()=>{
    return(
        <nav className='navbar-wrapper'>
            <div className="navbar-container">
                <div className="nav-logo">
                    <h1>sc logo</h1>
                </div>

                <div className="main-nav">
                    <ul className="nav">
                        <li className="nav-item active">
                            <a className="nav-link">home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">about us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
};
export default Navbar;