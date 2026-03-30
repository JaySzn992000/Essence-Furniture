import { useNavigate } from "react-router";
import LogoNitiArya from "../Logo/LogoNitiArya.png";
import "./header.css";

const Header = () => {

  const navigate = useNavigate();

  return (

    <footer className="footer">

      <div className="footer_container">

        {/* LEFT SECTION */}
        
        <div className="footer_left">

          <img 
            src={LogoNitiArya} 
            alt="logo" 
            className="footer_logo"
            onClick={() => navigate("/")}
          />

          <p>M-57, DLF, Gurugram - 122008</p>

          <p className="link">GET DIRECTION ↗</p>

          <p>info@ekanchair.com</p>
          <p>+91 88006 16363</p>

          {/* SOCIAL ICONS */}
          <div className="socials">
            <span>f</span>
            <span>X</span>
            <span>ig</span>
            <span>t</span>
            <span>a</span>
            <span>p</span>
          </div>

        </div>

        {/* COLLECTIONS */}
        <div className="footer_col">
          <h4>Collections</h4>
          <p onClick={() => navigate('/collections')}>Sofas</p>
          <p>Beds</p>
          <p>Dinning Tables</p>
          <p>Cabinets</p>
          <p>Bookshelves</p>
          <p>Tv Units</p>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer_col">
          <h4>Customer Services</h4>
          <p>Grievances</p>
          <p onClick={() => navigate('/return-policy')}>Return & Refund</p>
          <p onClick={() => navigate('/privacy-policy')}>Privacy Policy</p>
          <p onClick={() => navigate('/terms-conditions')}>Terms & Conditions</p>
          <p>Orders FAQs</p>
          <p>My Wishlist</p>
        </div>

        {/* NEWSLETTER */}
        <div className="footer_col newsletter">
          <h4>Newsletter</h4>

          <p className="newsletter_text">
            Sign up for our newsletter and get 10% off your first purchase
          </p>

          <div className="newsletter_box">
            <input type="text" placeholder="Enter your e-mail" />
            <button>➜</button>
          </div>

          <div className="check">
            <input type="checkbox" />
            <span>
              By clicking subscribe, you agree to the Terms of Service and Privacy Policy.
            </span>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer_bottom">
        <p>© 2026 Ran Technology. All Rights Reserved.</p>

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