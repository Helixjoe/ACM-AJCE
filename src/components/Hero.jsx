import Navbar from "./Navbar";

function Hero() {

    return (
        <div className="hero" id="home" >
            <Navbar />
            <div className="mainTitles">
                <h1 className="titleOne" data-aos="fade-up" data-aos-delay="300">Ignite Passion</h1>
                <h1 className="titleTwo" data-aos="fade-up" data-aos-delay="300">Fuel Knowledge</h1>
                <p data-aos="fade-up" data-aos-delay="600">Empowering Minds with</p>
                <p data-aos="fade-up" data-aos-delay="600">Engaging Events and Sessions</p>
                <div>
                    <button data-aos="fade-up" data-aos-delay="500">
                        <a href="#events">Register for the next event</a>
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Hero;