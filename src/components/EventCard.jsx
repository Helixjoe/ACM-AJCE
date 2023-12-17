import { useState } from "react";
function EventCard(props) {
    const [info, setInfo] = useState(false);
    function toggleInfo() {
        setInfo(!info);
    }
    const imgLocation = `url("./events/` + props.loc + `")`;
    let heading, date, content = "";
    let eventStyle = {
        backgroundImage: imgLocation,
        opacity: 0.9
    }

    if (info == true) {
        eventStyle = {
            opacity: 2
        }
        heading = props.head;
        date = props.date;
        content = props.content;
    }
    return (<div>
        <div className="eventCard"
            style={eventStyle}
        ><p>{heading}</p><p>{content}</p><p>{date}</p></div >

        <div className="eventInfo" onClick={toggleInfo}><p>More Info</p></div></div >);
}

export default EventCard;