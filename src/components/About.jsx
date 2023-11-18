import InfoCard from "./InfoCard";

function About() {
    return (
        <section className="about" id="about">
            <h1 className="aboutTitle">ABOUT US</h1>
            <div className="aboutSection">
                <InfoCard
                    icon="fa-regular fa-compass"
                    title="MISSION"
                    desc="Foster a deep passion for 
technology and innovation 
among our members"
                />
                <InfoCard
                    icon="fa-regular fa-calendar-days"
                    title="ACTIVITIES"
                    desc="Help members acquire 
practical skills through 
workshops and competitions 
"
                />
                <InfoCard
                    icon="fa-solid fa-people-group"
                    title="COMMUNITY"
                    desc="Working together
learning from one another
 and growing as a collective force
"
                />
            </div>
        </section>
    );
}

export default About;