
function EventCard(props) {
    const imgLocation = `url("./events/` + props.loc + `")`;
    return (<div><div className="eventCard" style={{
        backgroundImage: imgLocation,
        opacity: 0.9
    }}></div ><div className="eventInfo"><p>More Info</p></div></div >);
}

export default EventCard;