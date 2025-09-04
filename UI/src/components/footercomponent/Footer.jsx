import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      {/* 🔹 Top Footer */}
      <div className="footer-grid">
        <div>
          <h4>Smartphones</h4>
          <a>Find N3 Flip</a>
          <a>Find X8 Pro</a>
          <a>Reno13 Pro 5G</a>
          <a>Reno12 Pro 5G</a>
          <a>A3 Pro 5G</a>
          <a>See All Smartphones</a>
        </div>

        <div>
          <h4>Laptops</h4>
          <a>ElectroBook Air</a>
          <a>ElectroBook Pro</a>
          <a>ElectroBook Gaming</a>
          <a>Chromebook Series</a>
          <a>All Laptops</a>
        </div>

        <div>
          <h4>Smart TVs</h4>
          <a>4K Ultra HD</a>
          <a>OLED Series</a>
          <a>QLED Series</a>
          <a>Smart LED TVs</a>
          <a>All Televisions</a>
        </div>

        <div>
          <h4>Wearables</h4>
          <a>ElectroWatch Pro</a>
          <a>ElectroBand 8</a>
          <a>ElectroWatch Ultra</a>
          <a>All Smartwatches</a>
        </div>

        <div>
          <h4>IoT Products</h4>
          <a>Pad Air</a>
          <a>Enco Buds 2</a>
          <a>Enco Air2 Pro</a>
          <a>Smart Home Devices</a>
        </div>

        <div>
          <h4>Support</h4>
          <a>Contact Us</a>
          <a>Service Centers</a>
          <a>Warranty Policy</a>
          <a>Investor</a>
        </div>

        <div>
          <h4>About</h4>
          <a>ElectroHub Store</a>
          <a>Our Story</a>
          <a>Technology</a>
          <a>Career</a>
        </div>
      </div>

      {/* 🔹 Middle Footer */}
      <div className="footer-middle">
        <div>
          <i className="fa-solid fa-face-smile"></i>
          <span> Get Support From ElectroHub</span>
        </div>
        <div className="social-links">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-youtube"></i>
          <span>India (English)</span>
        </div>
      </div>

      {/* 🔹 Bottom Footer */}
      <div className="footer-bottom">
        <div className="links">
          <a>Privacy</a>
          <a>Terms of Use</a>
          <a>Cookies</a>
          <a>Legal & Compliance</a>
        </div>
        <div className="copyright">
          <p>© 2004-2025 ElectroHub. All rights reserved.</p>
          <Link to="/" className="back-to-top">
            Back to Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
