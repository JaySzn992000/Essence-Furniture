import Navbar from "../headers_footer/navbar";
import "./AboutHm.css";

const AboutHm = () => {

return (

<div>

<Navbar />

<main className="about_banner">

<img
loading="lazy"
className="banner_img"
src="https://myprop-flax.vercel.app/images/banner/banner-lb-furniture2.png"
alt=""
/>

<div className="banner_content">

<h1>Craft Your Perfect Living Space</h1>

<p>
Discover modern furniture designed for comfort, style,
and timeless elegance.
</p>

<button>Explore Collection</button>

</div>

</main>

</div>

);

};

export default AboutHm;