import EventCard from "./EventCard";
import eventList from "../assets/eventDetails"
import Slider from "react-slick";
import { useEffect, useState } from "react";
function createEntry(event) {
    const location = "Event" + event.eventId + ".png";
    const heading = event.heading;
    const eventdate = event.date;
    const content = event.content;
    const speaker = event.speaker;
    return (<EventCard loc={location} head={heading} date={eventdate} content={content} speaker={speaker} />);
}

function Events() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: isMobile ? "0px" : "0px",
        dots: true,
        arrows: true,
        slidesToShow: isMobile ? 1 : 3,
        speed: 500
    };
    return (<div id="events" className="eventsSection"><h1 data-aos="fade-up" data-aos-delay="100">Events</h1><Slider {...settings}>{eventList.map(createEntry)}</Slider></div >);
}

export default Events;