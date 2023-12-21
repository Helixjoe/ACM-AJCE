import { useState } from "react";
function EventCard(props) {
    const [info, setInfo] = useState(false);
    function toggleInfo() {
        setInfo(!info);
    }
    const imgLocation = `url("./events/` + props.loc + `")`;
    let heading, date, content, speaker = "";
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
        speaker = props.speaker;
    }
    return (<div>
        <div className="eventCard"
            style={eventStyle}
            data-aos="flip-right" data-aos-delay="300"><p>{heading}</p><p>{speaker}</p><p>{content}</p><p>{date}</p></div >

        <div className="eventInfo" onClick={toggleInfo} data-aos="fade-up" data-aos-delay="200"><p>More Info</p></div></div >);
}

export default EventCard;