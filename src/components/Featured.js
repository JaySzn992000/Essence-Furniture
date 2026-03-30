import { useState } from "react";
import o3plussunscreen from "../Slider/o3plusessunscreen.png";
import o3plushandmask from "../Slider/o3plushandmask.png";
import o3pluspedicure from "../Slider/o3pluspedicure.webp";
import o3plushydrogelmask from "../Slider/o3plushydrogelmask.png";
import "./Featured.css";

const Featured = () => {

const [selectedImage, setSelectedImage] = useState(null);

const openModal = (img) => {
setSelectedImage(img);
};

const closeModal = () => {
setSelectedImage(null);
};

return (

<div>

<div className="featured_center">
<h2>SHOP</h2>
<section className="shopcategory_flex">
<div className="shopcategory_card">
<img src={o3plussunscreen} alt="Sunscreen" />
<div className="overlay" onClick={() => openModal(o3plussunscreen)}>
<i className="fas fa-eye"></i>
</div>
</div>

<div className="shopcategory_card">
<img src={o3plushandmask} alt="Hand Mask" />
<div className="overlay" onClick={() => openModal(o3plushandmask)}>
<i className="fas fa-eye"></i>
</div>
</div>

<div className="shopcategory_card">
<img src={o3pluspedicure} alt="Pedicure" />
<div className="overlay" onClick={() => openModal(o3pluspedicure)}>
<i className="fas fa-eye"></i>
</div>
</div>

<div className="shopcategory_card">
<img src={o3plushydrogelmask} alt="Hydrogel Mask" />
<div className="overlay" onClick={() => openModal(o3plushydrogelmask)}>
<i className="fas fa-eye"></i>
</div>
</div>
</section>
</div>

{selectedImage && (
<div className="modal" onClick={closeModal}>
<span className="close">&times;</span>
<img className="modal-content" src={selectedImage} alt="Big View" />
</div>
)}
</div>

);
};

export default Featured;
