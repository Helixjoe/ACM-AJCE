import InfoCard from "./InfoCard";

function About() {
    return (
        <section className="about" id="about">
            <h1 className="aboutTitle" data-aos="fade-up" data-aos-delay="100">About Us</h1>
            <div className="aboutSection">
                <InfoCard
                    icon="fa-regular fa-compass"
                    title="MISSION"
                    desc="Foster a deep passion for 
technology and innovation 
among our members"
                    delay="300"
                />
                <InfoCard
                    icon="fa-regular fa-calendar-days"
                    title="ACTIVITIES"
                    desc="Help members acquire 
practical skills through 
workshops and competitions 
"
                    delay="600"
                />
                <InfoCard
                    icon="fa-solid fa-people-group"
                    title="COMMUNITY"
                    desc="Working together
learning from one another
 and growing as a collective force
"
                    delay="900"
                />
            </div>
        </section>
    );
}

export default About;