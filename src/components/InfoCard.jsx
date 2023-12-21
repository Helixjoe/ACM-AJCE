
function InfoCard(props) {
    return (<div className="infoCard" data-aos="fade-right" data-aos-delay={props.delay}>
        <i className={props.icon + " fa-2xl"}></i>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>);
}

export default InfoCard;