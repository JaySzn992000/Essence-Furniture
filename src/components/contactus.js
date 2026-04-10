import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import "./Contact.css";

const Contactus = () => {

const [formData, setFormData] = useState({
name: "",
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const sendEmail = (e) => {

e.preventDefault();

if (formData.name.trim().length < 3) {
setSuccessMessage("Name must be at least 3 characters long.");
return;
}

const emailData = {
to_email: formData.recipientEmail,
name: formData.name,
email: formData.email,
message: formData.message,
to_name: formData.name,
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
"Email sent successfully!",
response.status,
response.text
);
setFormData({
name: "",
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});
setSuccessMessage("Message has been sent successfully!");
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again.");
}
);
};


return (

<div>

<Navbar></Navbar>

<div className="about_banner">

<img
className="banner_img"
src="https://furniturer.com/cdn/shop/files/8ce6e7dc9e462f95338d286fb06e08.png?v=1773653793&width=2000"
alt="banner"
/>

<div className="banner_content">
<h1>Contact Us</h1>
<p>Homepage &gt; Pages &gt; <span>About Our Store</span></p>
</div>

</div>

<main>

<form onSubmit={sendEmail} className="contact_container">
<h2 className="contact_title">Get In Touch</h2>
<p className="contact_subtitle">
Use the form below to get in touch with the sales team
</p>

<div className="contact_form">
<div className="row">
<input
type="text"
name="name"
placeholder="Your Name*"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Your Email*"
value={formData.email}
onChange={handleChange}
required
/>
</div>

<textarea
name="message"
placeholder="Your Message*"
value={formData.message}
onChange={handleChange}
required
/>

<button type="submit">Send Message</button>

{successMessage && (
<p className="success_message">{successMessage}</p>
)}
</div>
</form>

</main>

<div className="header-ad">
<Header></Header>
</div>

</div>

);
};

export default Contactus;