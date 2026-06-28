import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import "./FilterProducts.css";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import Allproducts from "./allproduct";
import Banner1 from '../Slider/Banner1.jpg'
import Sofasfetch from "../Products/sofasfetch";
import Bedsfetch from "../Products/bedsfetch";
import Bookshelvesfetch from "../Products/bookshelvesfetch";
import Cabinetsfetch from "../Products/cabinetsfetch";
import Tables from "./tables";

const Flexproducts = ({ type }) => {

const [allProducts, setAllProducts] = useState([]);

const [filter, setFilter] = useState({
selectedNames: [],
minPrice: 0,
maxPrice: 100000,
});

const handleFilterUpdate = (newFilter) => {
setFilter((prev) => ({
...prev,
...newFilter,
}));
};

return (

<div>

{/* products */}

{type === "products" && (

<div>

<img className="ListBanner" src={Banner1}></img>

<div className="main_layout">

<section className="filter_absolute">

<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} />

</section>

<div className="products_wrapper">
<Allproducts 
filter={filter} 
allProducts={allProducts}/>
</div>

</div>

</div>

)}

{/* sofas */}

{type === "sofas" && (

<div>

<img className="ListBanner" src={Banner1}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Sofasfetch 
filter={filter} 
allProducts={allProducts}/>
</div>

</div>

</div>

)}

{/* beds */}

{type === "beds" && (

<div>

<img className="ListBanner" src={Banner1}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Bedsfetch 
filter={filter} 
allProducts={allProducts}/>
</div>

</div>

</div>

)}

{/* bookshelves */}

{type === "bookshelves" && (

<div>

<img className="ListBanner" src={Banner1}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Bookshelvesfetch 
filter={filter} 
allProducts={allProducts}/>
</div>

</div>

</div>

)}

{/* cabinets */}

{type === "cabinets" && (

<div>

<img className="ListBanner" src={Banner1}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Cabinetsfetch 
filter={filter} 
allProducts={allProducts}/>
</div>

</div>

</div>

)}

{type === "tables" && (

<div>

<img className="ListBanner" src={Banner1}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Tables 
filter={filter} 
allProducts={allProducts}/>
</div>

</div>

</div>

)}

</div>

);
};

export default Flexproducts;