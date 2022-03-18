import React from "react";
import "./newsletter.css";

function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <h1 className="form-title">Newsletter</h1>
        <p>Sign up to our Newsletter to receive unique offers</p>
        <form className="form">
          <input type="text" placeholder="Your e-mail here" />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
