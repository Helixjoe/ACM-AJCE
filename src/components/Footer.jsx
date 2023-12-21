import ajceLogo from "../assets/images/ajcelogo.png"
import acmLogo from "../assets/images/acmlogo.png"

function Footer() {
    return (
        <footer id="contact">
            <h1 data-aos="fade-up" data-aos-delay="100">Contact Us</h1>
            <div className='upper-footer'>

                <div className='footer-column footer-logo' data-aos="fade-right" data-aos-delay="200">
                    <img src={acmLogo} id="acm-footer-logo"></img>
                    <h1>E-mail: acmajce@amaljyothi.ac.in</h1>
                    <h1>Phone: +91 8547881984</h1>
                </div>
                <div className='footer-column' data-aos="fade-right" data-aos-delay="400">
                    <div className='socials'>
                        <h1>Our Socials</h1>
                        <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
                        <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                        <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='footer-column footer-logo' data-aos="fade-right" data-aos-delay="600">
                    <img src={ajceLogo}></img>
                    <div className='footer-logo-text'>
                        <h1>Kanjirapally, Kottayam District, Kerala</h1>
                        <h1>Phone: +91 85478 88365</h1>
                    </div>
                </div>
            </div>
            <div id='copyright'>
                <span>Developed By - Joel John (ACM AJCE Webmaster) | Email: joeljohn5112@gmail.com</span>
                <span>Copyright © 2023 All rights reserved | ACM AJCE</span>
            </div>
        </footer>
    )
}

export default Footer;