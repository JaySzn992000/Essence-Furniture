import Slider from "react-slick";
import img1 from "./Slider/1.img.jpg";
import img2 from "./Slider/2.img.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const SliderComponent = () => {

const settings = {
dots: true,
infinite: true,
speed: 800,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
arrows: true,
fade: true,
pauseOnHover: true,
dotsClass: "custom-dots",
nextArrow: <NextArrow />,
prevArrow: <PrevArrow />
};

return (

<div className="slider_container">

<Slider {...settings}>

<div className="slide">
<div className="slide_overlay"></div>
<img src={img1} alt="Summer Collection Sofa" />

<div className="slide_text">
<h2>Cozy Living Room Sofas</h2>
<p>
Bring warmth and luxury to your living room with our high-end sofa designs.
Premium quality materials with elegant craftsmanship.
</p>
<div className="button_group">
<button className="btn_primary">Explore Collection →</button>
<button className="btn_secondary">Shop Now</button>
</div>
</div>
</div>

<div className="slide">
<div className="slide_overlay"></div>
<img src={img2} alt="Elegant Dining Room" />
<div className="slide_text">
<h2>Elegant Dining Room</h2>
<p>
Enhance your dining experience with intelligently designed furniture.
Modern aesthetics meet ultimate comfort and functionality.
</p>
<div className="button_group">
<button className="btn_primary">Explore Collection →</button>
<button className="btn_secondary">View Details</button>
</div>
</div>
</div>
</Slider>
</div>

);
};

const NextArrow = (props) => {
const { onClick } = props;
return (
<div className="custom_arrow next_arrow" onClick={onClick}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
</div>
);
};

const PrevArrow = (props) => {
const { onClick } = props;
return (
<div className="custom_arrow prev_arrow" onClick={onClick}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>
</div>

);
};

export default SliderComponent;