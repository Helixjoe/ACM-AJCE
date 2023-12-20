
import { useState } from "react";
import Headroom from "react-headroom";

function Navbar() {
    let [currentState, setState] = useState("false");
    function navToggle() {
        if (currentState === "false") {
            setState("true");
        }
        else {
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
        <Headroom>
            <nav id="nav" className={scrollState ? "navBar scrollY" : "navBar"}>
                <div className="logo">
                    <div className="logoImage"></div>
                    <div className={"mobile-toggle-button"} onClick={navToggle}>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </div>
                <div className="links" data-visible={currentState}>
                    <a href="#about">ABOUT</a>
                    <a href="#events">EVENTS</a>
                    <a href="#execom">EXECOM</a>
                    <a href="#gallery">GALLERY</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </nav >
        </Headroom>
    );
}

export default Navbar;