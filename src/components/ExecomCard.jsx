export default function ExecomCard(props) {
    const imageLink = `url("./execom/` + props.image + `")`;
    return (
        <div className="memberCard" >
            <div className="memberPhoto" style={{
                backgroundImage: imageLink
            }}>
            </div>
            <p className="memName">{props.name}</p>
            <p className="memDes">{props.des}</p>
            <a href={props.link}><i className="fa-brands fa-linkedin"></i></a>
        </div >
    );
}