import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import Slider from "../slider";
import emailjs from "emailjs-com";
import "./ProductListmodule.css";
import "./Home.css";
import Pickles from "../Products/Pickle";
import Topnav from "../headers_footer/Topnav";
import Iconicselection from "./Iconicselection";
import AboutHm from "./AboutHm";
import Commitments from "./Commitments";
import ShopCategory from "./ShopCategory";
import Featured from "./Featured";



const Home = () => {

const [showFilters, setShowFilters] = useState(false);

const [formData, setFormData] = useState({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const sendEmail = (e) => {
e.preventDefault();

const emailData = {
to_email: formData.recipientEmail,
name: formData.email,
email: formData.email,
message: formData.message,
to_name: formData.email,
reply_to: formData.email,
};

emailjs
.send(
process.env.REACT_APP_EMAILJS_SERVICE_ID,
process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
emailData,
process.env.REACT_APP_EMAILJS_USER_ID
)
.then(
(response) => {
console.log(
"You have successfully subscribe !",
response.status,
response.text
);
setFormData({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});
setSuccessMessage("Message sent successfully!");
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again.");
}
);
};

const naviGateProductsAll = useNavigate()
const seeAllProducts = () => {
naviGateProductsAll('/collections')
}


return (

<div>

<Navbar />
<Topnav></Topnav>

<Slider />

<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={10}></Pickles>
</div>

<button onClick={seeAllProducts} className="seeLLProducts">View All</button>

<Commitments></Commitments>
<AboutHm></AboutHm>
<ShopCategory></ShopCategory>
<Featured></Featured>

<div className="subscribe_k">

<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

</form>

</div>

<Header />

</div>

);

};

export default Home;
