import ajceLogo from "../assets/images/ajcelogo.jpg"
import acmLogo from "../assets/images/acmlogo.png"
import cseLogo from "../assets/images/cseLogo.png"
function Footer() {
    return (
        <footer id="contact">
            <h1 data-aos="fade-up" data-aos-delay="100">Contact Us</h1>
            <div className='upper-footer'>

                <div className='footer-column footer-logo acm' data-aos="fade-right" data-aos-delay="200">
                    <img src={acmLogo} id="acm-footer-logo"></img>
                    <h1>E-mail: acmajce@amaljyothi.ac.in</h1>
                    <h1>Phone: +91 99468 47530</h1>
                </div>
                <div className='footer-column' data-aos="fade-right" data-aos-delay="300">
                    <div className='socials'>
                        <h1>Our Socials</h1>
                        <a href="https://www.instagram.com/acm_ajce/"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/company/acm-ajce-student-chapter/mycompany"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='footer-column footer-logo' data-aos="fade-right" data-aos-delay="400">
                    <div className="footer-image">
                        <img src={cseLogo}></img></div>
                    <div className='footer-logo-text'>
                        <h1>Dept. of Computer Science</h1>
                        <h1>Amal Jyothi College of Engineering ( Autonomous )</h1>
                        <h1>Kanjirapally, Kottayam District, Kerala</h1>
                        <h1>Phone: +91 85478 88365</h1>
                    </div>
                </div>
            </div>
            <div id='copyright'>
                <span>Developed By - Joel John (ACM AJCE Webmaster)</span>
                <span>Copyright © 2023 All rights reserved | ACM AJCE</span>
            </div>
        </footer >
    )
}

export default Footer;