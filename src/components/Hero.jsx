import Navbar from "./Navbar";
import { useState } from "react";

function Hero() {
    const [currentState, setState] = useState(false);
    function scrollchange() {
        if (window.scrollY >= 100) {
            console.log("scroll executed");
        }
    }
    window.addEventListener('scroll', scrollchange);
    return (
        <div className="hero">
            <Navbar />
            <div className="mainTitles">
                <h1 className="titleOne" >Ignite Passion</h1>
                <h1 className="titleTwo">Fuel Knowledge</h1>
                <p>Empowering Minds with</p>
                <p>Engaging Events and Sessions</p>
                <div>
                    <button>
                        <a href="#events">Register for the next event</a>
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Hero;