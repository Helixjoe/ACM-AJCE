
function EventCard(props) {
    const imgLocation = `url("./events/` + props.loc + `")`;
    return (<div className="eventCard" style={{
        backgroundImage: imgLocation
    }}></div >);
}

export default EventCard;