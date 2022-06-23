import logo from "../image/logo.png"

export const Footer = () =>{
    return (
        <footer className="footer_content">
            <img className="footer_logo" src={logo}/>
            {/* footer nav */}
            <div className="footer_nav">
                <ul className="footer_links">
                    <li>
                        <a className="foot_link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="foot_link" href="#">About Us</a>
                    </li>
                    <li>
                        <a className="foot_link" href="#">Services</a>
                    </li>
                    <li>
                        <a className="foot_link" href="#">Product</a>
                    </li>
                    <li>
                        <a className="foot_link" href="#">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="social_links">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-facebook"></i>
            </div>
        </footer>
    )
}