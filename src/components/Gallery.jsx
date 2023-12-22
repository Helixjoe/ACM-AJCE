import Slider from "react-slick";
import { useEffect, useState } from "react";
import galleryList from "../assets/galleryDetails"
import GalleryCard from "./GalleryCard";

function createEntry(gallery) {
    const name = gallery.name;
    return (<GalleryCard name={name} />);
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: isMobile ? 3000 : 1000,
        fade: isMobile ? true : false,
    };
    return (<div id="gallery" className="gallerySection" >
        <h1 data-aos="fade-up" data-aos-delay="100">Gallery</h1>
        <Slider {...settings}>{galleryList.map(createEntry)}</Slider>
    </div >)
}