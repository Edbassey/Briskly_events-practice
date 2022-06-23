import logo from "../image/logo.png"
export const Nav = () => {
    return (
        
        <header>
            <nav className="navbar navbar-expand-lg navbar-light text-danger">
                <div className="container-fluid container">
                <img className="nav-logo" src={logo}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    
                </button>
                <i className="navbar-toggler bi bi-list border-0" type="menu" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </i>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <button className="sign_btn">
                        <a className="nav-link" href="#">Sign In/Sign Up</a>
                    </button>
                    </ul>                
                </div>
                </div>
            </nav>  
            <div className="hero_content text-center pt-5">
                <h1>Event management made easy at your comfort.</h1>
            </div>
        </header>
    )
}