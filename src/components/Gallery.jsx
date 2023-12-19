import Slider from "react-slick";
import { useEffect, useState } from "react";
import galleryList from "../assets/galleryDetails"

function createEntry(gallery) {
    const imgLocation = `url("./gallery/` + gallery.name + `")`;
    return (<div className="galleryElement" style={{ backgroundImage: imgLocation }}></div>);
}

export default function Gallery() {
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
    return (<div className="gallerySection">
        <h1>Gallery</h1>
        {galleryList.map(createEntry)}
    </div>)
}