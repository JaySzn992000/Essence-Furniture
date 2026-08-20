import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../headers_footer/navbar";
import FAqQuestions from "../components/FAqQuestions";
import Filters from "../components/Filters";
import { connect } from "react-redux";
import { addToCart } from "../action/action";
import axios from "axios";
import "./Pickle.css";

const Pickle = ({ addToCart, filter }) => {

const [filteredProducts, setFilteredProducts] = useState([]);
const [allProducts, setAllProducts] = useState([]);
const [wishlistStatus, setWishlistStatus] = useState({});
const [wishlistCount, setWishlistCount] = useState(0);
const [cartCount, setCartCount] = useState(0);
const [products, setProducts] = useState([]);

useEffect(() => {
axios
.get("https://antara-gug4.onrender.com/fetchProductslist")
.then((res) => setProducts(res.data))
.catch((err) => console.error(err));
}, []);

const location = useLocation();
const query = new URLSearchParams(location.search).get("search");

useEffect(() => {
if (query) {
axios
.get("https://antara-gug4.onrender.com/fetchProductslist", { params: { search: query } })
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => console.error("Error fetching products:", error));
} else {
axios
.get("https://antara-gug4.onrender.com/fetchProductslist")
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => console.error("Error fetching all products:", error));
}
}, [query]);

useEffect(() => {
if (!allProducts.length) return;
let updatedProducts = [...allProducts];
if (filter?.selectedNames?.length > 0) {
updatedProducts = updatedProducts.filter((product) =>
filter.selectedNames.some((name) =>
product.img?.toLowerCase().includes(name.toLowerCase())
)
);
}
const min = filter?.minPrice ?? 0;
const max = filter?.maxPrice ?? 100000;
updatedProducts = updatedProducts.filter(
(product) => Number(product.price) >= min && Number(product.price) <= max
);
setFilteredProducts(updatedProducts);
}, [filter, allProducts]);

useEffect(() => {
const syncWishlist = () => {
const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const updatedStatus = {};
storedWishlist.forEach((item) => { updatedStatus[item.id] = true; });
setWishlistStatus(updatedStatus);
};
syncWishlist();
window.addEventListener("wishlistUpdated", syncWishlist);
window.addEventListener("storage", syncWishlist);
return () => {
window.removeEventListener("wishlistUpdated", syncWishlist);
window.removeEventListener("storage", syncWishlist);
};
}, []);

const sendToWishlist = (product) => {
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const productIndex = wishlist.findIndex((item) => item.id === product.id);
if (productIndex === -1) wishlist.push(product);
else wishlist.splice(productIndex, 1);
localStorage.setItem("wishlist", JSON.stringify(wishlist));
window.dispatchEvent(new Event("storage"));
const updatedWishlistStatus = { ...wishlistStatus, [product.id]: !wishlistStatus[product.id] };
localStorage.setItem("wishlistStatus", JSON.stringify(updatedWishlistStatus));
setWishlistStatus(updatedWishlistStatus);
setWishlistCount(wishlist.length);
};

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const renderStars = (rating) => {
const full = Math.floor(rating);
const half = rating % 1 >= 0.5 ? 1 : 0;
const empty = 5 - full - half;
let stars = [];
for (let i = 0; i < full; i++) stars.push(<i key={`full-${i}`} className="fas fa-star" />);
if (half) stars.push(<i key="half" className="fas fa-star-half-alt" />);
for (let i = 0; i < empty; i++) stars.push(<i key={`empty-${i}`} className="far fa-star" />);
return stars;
};

return (

<div>

<div id="ap_sticky_products_height">
<div className="ap_sticky-wrapper">
<section>
<div className="ap_flex_productlist">
{filteredProducts.map((productlist) => {
const originalPrice = productlist.originalPrice || productlist.price * 1.5;
const discountPercent = Math.round(((originalPrice - productlist.price) / originalPrice) * 100);
const rating = productlist.rating || 4.5;
const reviewCount = productlist.reviewCount || productlist.review || 0;
return (
<div key={productlist.id} className="ap_produclist_divContainer">
<i onClick={() => sendToWishlist(productlist)} className={`fa fa-heart ap_fa-heart_products ${wishlistStatus[productlist.id] ? "wishlist-active" : ""}`}></i>
<div className="ap_image-wrapper">
<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>
<img src={productlist.file_path} alt={productlist.name} loading="lazy" />
</Link>
</div>
<div className="ap_padding_contain">
<div className="ap_flex_inr">
<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>
<li>{productlist.name}</li>
</Link>
</div>
<div className="ap_divider-line"></div>
<div className="ap_price_review_wrapper">
<div className="ap_price_row_new">
<span className="ap_discount_price">₹ {Number(productlist.price).toLocaleString("en-IN")}</span>
{originalPrice > productlist.price && (
<>
<span className="ap_original_price">₹ {Number(originalPrice).toLocaleString("en-IN")}</span>
<span className="ap_save_badge">Save {discountPercent}%</span>
</>
)}
</div>
<div className="ap_rating_row_new">
<span className="ap_stars_container">{renderStars(rating)}</span>
<span className="ap_rating_value">{rating}</span>
<span className="ap_review_count">{reviewCount} reviews</span>
</div>
</div>
</div>
</div>
);
})}
</div>
</section>
</div>
</div>
{/* <FAqQuestions /> */}
</div>

);
};

export default connect(null, { addToCart })(Pickle);