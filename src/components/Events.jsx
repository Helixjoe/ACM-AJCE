import EventCard from "./EventCard";
import eventList from "../assets/eventDetails"
import Slider from "react-slick";
import { useEffect, useState } from "react";
function createEntry(event) {
    const location = "Event" + event.eventId + ".png"
    return (<EventCard loc={location} />);
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
        centerPadding: "100px",
        slidesToShow: isMobile ? 1 : 3,
        speed: 300,
        dots: true,
        autoplay: false,
        autoplaySpeed: isMobile ? 1000 : 2000,
    }
    return (<div id="events" className="eventsSection"><h1>EVENTS</h1><Slider {...settings}>{eventList.map(createEntry)}</Slider></div >);
}

export default Events;