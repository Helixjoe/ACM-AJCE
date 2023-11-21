
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
                <img src="src/assets/images/LOGO.png" alt="ACM AJCE Logo" />
                <div className={"mobile-toggle-button"} onClick={navToggle}>
                    <i className="fa-solid fa-bars"></i>
                </div>

            </div>
            <div className="links" data-visible={currentState}>
                <a href="#about">ABOUT</a>
                <a href="/">EVENTS</a>
                <a href="/">GALLERY</a>
                <a href="/">EXECOM</a>
                {/* <a href="/" className="womensLink">WOMEN'S CHAPTER</a> */}
            </div>
        </nav >
    );
}

export default Navbar;