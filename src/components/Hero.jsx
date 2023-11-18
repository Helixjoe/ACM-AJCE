import Navbar from "./Navbar";

function Hero() {
    return (
        <div className="hero">
            <Navbar />
            <div className="mainTitles">
                <h1 className="titleOne" >Ignite Passion</h1>
                <h1 className="titleTwo">Fuel Knowledge</h1>
                <p>Empowering Minds with
                    Engaging Events and Sessions</p>
                <button className="registerButton">
                    <a href="/">Register for the next event</a>
                </button>
            </div>
        </div >
    );
}

export default Hero;