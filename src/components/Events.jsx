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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
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
        centerPadding: isMobile ? "20px" : "100px",
        slidesToShow: isMobile ? 1 : 3,
        speed: 300,
        dots: true,
        autoplay: true,
        autoplaySpeed: isMobile ? 1500 : 3000,
    }
    return (<div id="events" className="eventsSection"><h1>Events</h1><Slider {...settings}>{eventList.map(createEntry)}</Slider></div >);
}

export default Events;