import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>Working Hours</p>
          <p>
            <i className="footer-icon fa-solid fa-clock"></i>
            12:00 - 00:30
          </p>
          <span>
            <i className="footer-icon fa-solid fa-phone"></i>
            2352022322
          </span>
        </div>
        <div className="footer-section-social">
          <i className="footer-icon fa-brands fa-facebook-f"></i>
          <i className="footer-icon fa-brands fa-youtube"></i>
          <i className="footer-icon fa-brands fa-instagram-square"></i>
          <br />
          <br />
          <i className="footer-icon fa-brands fa-pinterest-p"></i>
          <i className="footer-icon fa-brands fa-linkedin-in"></i>
        </div>
        <div className="footer-store">
          <img
            src="https://www.pizzafan.gr/assets/site/images/newApp.png"
            alt=""
          />
        </div>
        <div className="footer-store-imges">
          <img
            src="https://www.pizzafan.gr/assets/site/images/playstore.png"
            alt=""
          />
          <img
            src="https://www.pizzafan.gr/assets/site/images/appstore.png"
            alt=""
          />
          <img
            src="https://www.pizzafan.gr/assets/site/images/appGall.png"
            alt=""
          />
        </div>
        <div className="copyrights">
          <h6>Copyright &copy; 2021 Website Created by Gevris</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
