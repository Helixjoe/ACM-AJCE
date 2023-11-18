
function InfoCard(props) {
    return (<div className="infoCard">
        <i className={props.icon + " fa-2xl"}></i>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>);
}

export default InfoCard;