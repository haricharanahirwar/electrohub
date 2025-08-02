import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer class="footer-section">
                <div class="main-div-footer">
                    <div class="footer-child-one">
                        <p>Smartphones</p>

                        <a  > Find N3 Flip</a>
                        <a  > Find X8 Pro</a>
                        <a  > Find X8</a>
                        <a  > Reno13 Pro 5G</a>
                        <a  > Reno13 5G</a>
                        <a  > Reno12 Pro 5G</a>
                        <a  > Reno12 5G</a>
                        <a  > F27 Pro+ 5G</a>
                        <a  > F27 5G</a>
                        <a  > A3 Pro 5G</a>
                        <a  > A3 5G</a>
                        <a  > A3x 5G</a>
                        <a  > A3x</a>
                        <a  >See All Smartphones</a>
                    </div>
                    <div class="footer-child-two">
                        <p>IoT Products</p>
                        <a  > Pad Air</a>
                        <a  >Enco Air3 Pro</a>
                        <a  >Enco Buds2</a>
                        <a  > Enco Air2 Pro</a>
                    </div>
                    <div class="footer-child-three">
                        <p>Special Offers</p>
                        <a  >Education Discount</a>
                    </div>
                    <div class="footer-child-four">
                        <p>Support</p>
                        <a  >Contact Us</a>
                        <a  >Service Centers &</a>
                        <a  >Reservation</a>
                        <a  >OPPO Update</a>
                        <a  >Terms and Conditions</a>
                        <a  >E-waste Management</a>
                        <a  >Security Response Center</a>
                        <a  >Warranty Policy </a>
                        <a  >Investor</a>
                    </div>
                    <div class="footer-child-five">
                        <p>About </p>
                        <a  >ElectroHub Store</a>
                        <a  >Our Story</a>
                        <a  >Technology</a>
                        <a  >Newsroom</a>
                        <a  >Campaign</a>
                        <a  >Career</a>
                        <a  >ColorOS</a>
                        <a  >Store Locator</a>
                    </div>
                    <div class="footer-child-six">
                        <p>ElectroHub Community</p>
                        <a  >ElectroHub Community
                        </a>
                    </div>
                </div>
                <div class="second-footer-main-div">
                    <div class="left-chid">
                        <a class="demo"><i class="fa-solid fa-face-smile"></i></a>
                        <a  >Get Support From ElectroHub</a>
                        <a  >^</a>
                    </div>
                    <div class="right-child">
                        <a  ><i class="fa-brands fa-square-instagram"></i></a>
                        <a  ><i class="fa-brands fa-facebook"></i></a>
                        <a  ><i class="fa-brands fa-whatsapp"></i></a>
                        <a  ><i class="fa-brands fa-youtube"></i></a>
                        <div class="india-langauge-option">
                            <a  >India (English)</a>
                        </div>
                    </div>

                </div>
                <div class="third-footer-main-div">
                    <a  >Privacy</a>
                    <a  >Terms of Use</a>
                    <a  >Terms of Sales</a>
                    <a  >Cookies</a>
                    <a  >Legal & Compliance</a>
                    <a  >Copyright © 2004-2025 ElectroHub. All rights reserved.</a>
                    <div class="third-footer-right-div">
                        <a ><Link to="/">Back to Top </Link></a>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;