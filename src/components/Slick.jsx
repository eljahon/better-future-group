"use client";
import Silder from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Slick = ({children}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
    }
    return <Silder {...settings}>
        {children}
    </Silder>

}
export default Slick;
