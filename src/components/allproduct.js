import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../headers_footer/navbar";
import FAqQuestions from "./FAqQuestions";
import Filters from "./Filters";
import { connect } from "react-redux";
import { addToCart } from "../action/action";
import axios from "axios";
import "./ProductListmodule.css";
import Header from "../headers_footer/header";

const Allproducts = ({ addToCart, filter}) => {

const [filteredProducts, setFilteredProducts] = useState([]);
const [allProducts, setAllProducts] = useState([]);
const [wishlistCount, setWishlistCount] = useState(0);
const [wishlistStatus, setWishlistStatus] = useState({});
const [cartCount, setCartCount] = useState(0);
const [arrayStore, setArrayStore] = useState([]);
const [products, setProducts] = useState([]);

useEffect(() => {

axios
.get("https://antara-gug4.onrender.com/fetchProductslist")
.then((res) => setProducts(res.data))
.catch((err) => console.error(err));
}, []);

const handleAddToCart = (product) => {
if (!product) return;
const isProductInCart = JSON.parse(localStorage.getItem("cart"))?.some(
(item) => item.id === product.id
);
if (isProductInCart) {
alert("This product is already in your cart.");
} else {
addToCart(product);
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem(`cart-added-${product.id}`, JSON.stringify(true));
alert("Product added to cart!");
}
};

useEffect(() => {
const updateWishlist = () => {

const wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

const statusObj = {};

wishlist.forEach((item) => {
statusObj[item.id] = true;
});

setWishlistStatus(statusObj);

};

updateWishlist();

window.addEventListener("wishlistUpdated", updateWishlist);

return () => {
window.removeEventListener("wishlistUpdated", updateWishlist);
};

}, [] );

const location = useLocation();
const query = new URLSearchParams(location.search).get("search");
useEffect(() => {
if (query) {
axios
.get("https://antara-gug4.onrender.com/fetchProductslist", {
params: { search: query },
})
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => {
console.error("Error fetching products:", error);
});
} else {
axios
.get("https://antara-gug4.onrender.com/fetchProductslist")
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => {
console.error("Error fetching all products:", error);
});
}
}, [query] );

useEffect(() => {

if (!allProducts.length) return;

let updatedProducts = [...allProducts];

if (filter?.selectedNames?.length > 0) {

updatedProducts = updatedProducts.filter((product) =>
filter.selectedNames.some(
(name) =>
product.img?.toLowerCase().includes(name.toLowerCase())
)
);

}

updatedProducts = updatedProducts.filter(
(product) =>
product.price >= filter.minPrice &&
product.price <= filter.maxPrice
);

setFilteredProducts(updatedProducts);

}, [filter, allProducts]);

const sendToWishlist = (product) => {

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

const exists = wishlist.find(
(item) => item.id === product.id
);

if (exists) {

wishlist = wishlist.filter(
(item) => item.id !== product.id
);

} else {

wishlist.push(product);

}

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

window.dispatchEvent(
new Event("wishlistUpdated")
);

};

const handleFilterUpdate = (filtered) => {
setFilteredProducts(filtered);
};

const slugify = (text) => {
return text
.toLowerCase()
.replace(/[^a-z0-9]+/g, '-')   
.replace(/(^-|-$)/g, '');      
};


return (

<div>

{/* <Navbar wishlistCount={wishlistCount} cartCount={cartCount} /> */}

{/* <img className="ListBanner" src={Banner1}></img> */}

{/* <Filters allProducts={allProducts} onFilterUpdate={handleFilterUpdate} /> */}

<div id="sticky_products_height">

<div className="sticky-wrapper">

<section>
<div>

<div className="flex_productlist">
{filteredProducts.map((productlist) => (
<div key={productlist.id} className="produclist_divContainer">

<i
onClick={() => sendToWishlist(productlist)}
className={`fa fa-heart fa-heart_products ${
wishlistStatus[productlist.id] ? "wishlist-active" : ""
}`}
>
{" "}

</i>

<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>
<img
src={productlist.file_path}
alt={productlist.name}
loading="lazy"
/>
</Link>

<div className="padding_contain">
<div className="flex_inr">

<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>
<li>{productlist.name}</li>
</Link>

<div className="price_div">
<li className="fa fa-inr"></li>
<li className="fa_Price">{productlist.price}</li>
</div>

<div className="review_CtrAllPrdcts">

<img
id="Review_ImgPrdcts"
src="https://cdn-icons-png.flaticon.com/128/2658/2658473.png"/>

<li style={{ marginTop: ".5em", marginLeft: "-.2em" }}></li>
<li className="fa_Review">{productlist.review}</li>

</div>

</div>

</div>

</div>

))}

</div>

</div>
</section>

</div>

</div>

<FAqQuestions></FAqQuestions>

{/* <Header></Header> */}

</div>

);

};

export default connect(null, { addToCart })(Allproducts);