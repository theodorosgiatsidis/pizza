import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Popup } from "@progress/kendo-react-popup";

function Navbar() {
  const anchor = useRef();
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    console.log(show);
    console.log(anchor);
  }, [show]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navLeft">
          <Link to="/">
            <img
              src="https://www.pizzafan.gr/assets/site/images/logoHor.png?v=2"
              alt=""
            />
          </Link>
        </div>
        <div className="navCentre">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img
                className="imgCentre-nav"
                src="https://www.pizzafan.gr/assets/site/images/phone_plus.png"
                alt=""
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <img
                  src="https://www.pizzafan.gr/assets/site/images/pf__phone-icon.png"
                  alt=""
                />
                2352022322
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <img
                  src="https://www.pizzafan.gr/assets/site/images/pf__call.png"
                  alt=""
                />
                Call me Back
              </Dropdown.Item>
              <hr></hr>
              <div className="dropdown">
                Working Hours
                <i className="icon fa-solid fa-clock"> 12:00 - 00:30</i>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="navRight">
          <div className="login">Login</div>
          <div className="register">Register</div>
          <i
            ref={anchor}
            onClick={onClick}
            className="cart fa-solid fa-cart-shopping"
          ></i>
          <div className="counter">2</div>

          <Popup
            anchor={anchor.current}
            show={show}
            popupClass={"popup-content"}
          >
            <div className="Basket">
              {cartItems.length === 0 && <h2>Cart Is Empty</h2>}
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
