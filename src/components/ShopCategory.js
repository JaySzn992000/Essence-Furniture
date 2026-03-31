import trendingone from "../Slider/trendingone.jpg";
import trendingtwo from "../Slider/trendingtwo.jpg";
import "./ShopCategory.css";

const ShopCategory = () => {

return (

<div className="promo-container">

<div className="promo-section">
<img
src={trendingone}
alt="Summer 2026 Sofa Collection"
className="promo-image"
loading="lazy"
/>
<div className="promo-overlay">
<h3>SUMMER 2026 COLLECTION</h3>
<p>Super Sale Up To 50%</p>
<button>Discover Now →</button>
</div>
</div>

<div className="promo-section">
<img
src={trendingtwo}
alt="Summer 2026 Dining Collection"
className="promo-image"
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

export default ShopCategory;