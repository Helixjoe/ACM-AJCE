import EventCard from "./EventCard";
import eventList from "../assets/eventDetails"
function createEntry(event) {
    const location = "Event" + event.eventId + ".png"
    return (<EventCard loc={location} />);
}


function Events() {
    return (<div id="events" className="eventsSection"><h1>EVENTS</h1><div className="events">{eventList.map(createEntry)}</div></div >);
}

export default Events;