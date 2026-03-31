import trendingone from "../Slider/trendingone.jpg";
import trendingtwo from "../Slider/trendingtwo.jpg";
import "./Commitments.css";

const Commitments = () => {

return (

<div className="promo-container_Commit">

<div className="promo-section_Commit">

<img
src={trendingone}
alt="Summer 2026 Sofa Collection"
className="promo-image_Commit"
loading="lazy"/>

<div className="promo-overlay_Commit">
<h3>SUMMER 2026 COLLECTION</h3>
<p>Super Sale Up To 50%</p>
<button>Discover Now →</button>
</div>
</div>

<div className="promo-section_Commit">
<img
src={trendingtwo}
alt="Summer 2026 Dining Collection"
className="promo-image_Commit"
loading="lazy"
/>
<div className="promo-overlay">
<h3>SUMMER 2026 COLLECTION</h3>
<p>What's New</p>
<button>Discover Now →</button>
</div>
</div>
</div>

);
};

export default Commitments;