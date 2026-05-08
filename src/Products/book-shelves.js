import React from "react";
import Navbar from "../headers_footer/navbar";
import Flexproducts from "../components/flexproducts";
import Header from "../headers_footer/header";

const Bookshelves = () => {

return (

<div>

<Navbar />
<Flexproducts type="bookshelves" />
<Header></Header>

</div>

);
};

export default Bookshelves;