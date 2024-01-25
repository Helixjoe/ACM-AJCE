
import { useState } from "react";
import Headroom from "react-headroom";

function Navbar() {
    let [currentState, setState] = useState("false");
    function navToggle() {
        if (currentState === "false") {
            setState("true");
        }
        else if (currentState === "true") {
            setState("false");
        }
    }
    const [scrollState, setScroll] = useState(false);
    function scrollchange() {
        if (window.scrollY >= window.innerHeight - 10) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }
    window.addEventListener('scroll', scrollchange);
    return (
        <Headroom style={{
            height: currentState ? 200 : 0,
        }}>
            <nav id="nav" className={scrollState ? "navBar scrollY" : "navBar"} >
                <div className="logo" data-aos="fade-down" data-aos-delay="200">
                    <a href="#home"><div className="logoImage"></div></a>
                    <div className={"mobile-toggle-button"} onClick={navToggle} >
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </div>
                <div className="links" data-visible={currentState} >
                    <a href="#about" onClick={navToggle} data-aos="fade-down" data-aos-delay="500">ABOUT</a>
                    <a href="#events" onClick={navToggle} data-aos="fade-down" data-aos-delay="500">EVENTS</a>
                    <a href="#execom" onClick={navToggle} data-aos="fade-down" data-aos-delay="500">EXECOM</a>
                    <a href="#gallery" onClick={navToggle} data-aos="fade-down" data-aos-delay="500">GALLERY</a>
                    <a href="#contact" onClick={navToggle} data-aos="fade-down" data-aos-delay="500">CONTACT</a>
                </div>
            </nav >
        </Headroom >
    );
}

export default Navbar;