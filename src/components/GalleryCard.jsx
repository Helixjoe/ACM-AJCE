export default function GalleryCard(props) {
    const imgLocation = `url("./gallery/` + props.name + `")`;
    return (<div className="galleryElement" style={{ backgroundImage: imgLocation }} data-aos="flip-right" data-aos-delay="300"></div>)
}