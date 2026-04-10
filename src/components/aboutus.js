import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import aboutsofas from "../Slider/aboutsofas.jpg";
import "./about.css";
// import AboutPickle from "../Slider/AboutPickle.jpg";
// import AboutCollectionOne from "../Slider/ourcollectionone.png";
// import AboutCollectionTwo from "../Slider/ourcollectiontwo.png";

const Aboutus = () => {

return (

<div>

<Navbar></Navbar>

<div className="about_banner">

<img
className="banner_img"
src="https://furniturer.com/cdn/shop/files/8ce6e7dc9e462f95338d286fb06e08.png?v=1773653793&width=2000"
alt="banner" />

<div className="banner_content">
<h1>About Our Store</h1>
<p>Homepage &gt; Pages &gt; <span>About Our Store</span></p>
</div>

</div>

<main className="about_container">

<div className="about_left">
<img src={aboutsofas} alt="about" />
</div>

<div className="about_right">
<h1>
PureChair - Offering rare and beautiful items all over the india
</h1>

<div className="about_tabs">
<span className="active">Introduction</span>
{/* <span>Our Vision</span>
<span>What Sets Us Apart</span>
<span>Our Commitment</span> */}
</div>

<p>
Welcome to Essence Furniture Store, your premier destination for luxury-forward
furniture. We pride ourselves on offering a curated selection of rare
and beautiful items sourced both locally and globally. Our mission is
to bring you the latest trends and timeless styles, ensuring every piece
reflects quality and elegance.
</p>

<button className="about_btn">Read More</button>
</div>

</main>

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;