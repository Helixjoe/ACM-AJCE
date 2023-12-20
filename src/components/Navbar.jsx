
import { useState } from "react";

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
    return (
        <nav id="nav" className="navBar">
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
    );
}

export default Navbar;