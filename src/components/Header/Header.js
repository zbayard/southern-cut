import './Header.css';


const Header = ()=>{

    return(
        <div className="header">
            <div className="logo-box">
                <img src="" alt="Logo" className="logo"/>
            </div>
            <a href="#" className="btn btn-white btn-animated">Get a quote today</a>

            <div className="arrow-box">
                <img src='arrow' alt="arrow" className="arrow"/>
            </div>

        </div>
    )

};
export default Header;