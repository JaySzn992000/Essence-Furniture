import { useNavigate } from "react-router";
import LogoNitiArya from "../Logo/LogoNitiArya.png";
import { useState } from "react";
import "./header.css";

const Header = () => {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [subscribed, setSubscribed] = useState(false);
const [error, setError] = useState("");

const handleSubscribe = () => {

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailPattern.test(email)){
setSubscribed(true);
setError("");
}
else{
setSubscribed(false);
setError("Please enter a valid email");
}

};

return (

<footer className="footer">

<div className="footer_container">

<div className="footer_left">

<img 
src={LogoNitiArya} 
alt="logo" 
className="footer_logo"
onClick={() => navigate("/")} />

<p>M-57, DLF, Gurugram - 122008</p>

<p className="link">GET DIRECTION ↗</p>

<p>info@ekanchair.com</p>
<p>+91 88006 16363</p>

<div className="socials">
<span>f</span>
<span>X</span>
<span>ig</span>
<span>t</span>
<span>a</span>
<span>p</span>
</div>

</div>

<div className="footer_col">
<h4>Collections</h4>
<p onClick={() => navigate('/sofas')}>Sofas</p>
<p onClick={() => navigate('/beds')}>Beds</p>
<p onClick={() => navigate('/cabinets')}>Cabinets</p>
<p onClick={() => navigate('/book-shelves')}>Bookshelves</p>
</div>

<div className="footer_col">
<h4>Customer Services</h4>
<p onClick={() => navigate('/return-policy')}>Return & Refund</p>
<p onClick={() => navigate('/privacy-policy')}>Privacy Policy</p>
<p onClick={() => navigate('/terms-conditions')}>Terms & Conditions</p>
<p onClick={() => navigate('/faqs')}>Orders FAQs</p>
</div>

<div className="footer_col newsletter">
<h4>Newsletter</h4>

<p className="newsletter_text">
Sign up for our newsletter and get 10% off your first purchase
</p>

<div className="newsletter_box">
<input
type="text"
placeholder="Enter your e-mail"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<button onClick={handleSubscribe}>
<span> ➜</span>
</button>

</div>

{subscribed && (
<p style={{color:"#000", marginTop:"10px"}}>
You have subscribed successfully !
</p>
)}

{error && (
<p style={{color:"#000", marginTop:"10px"}}>
{error}
</p>
)}

</div>

</div>

<div className="footer_bottom">
<p>© 2026 Designed & Developed by JSON Softech.</p>

<div className="payments">

<span>VISA</span>
<span>MASTERCARD</span>
<span>AMEX</span>
<span>PAYPAL</span>
</div>

</div>

</footer>

);
};

export default Header;