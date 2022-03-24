import React, { useContext } from "react";
import "./navbar.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/store";
import {
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  DropdownItem,
} from "reactstrap";

function Navbar() {
  const { user, dispatch } = useContext(StoreContext);
  const { cartItems } = useContext(StoreContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location = "/";
  };

  return (
    <div className="navbar">
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
        {user && (
          <div>
            <i id="PopoverLegacy" className="navIcon fa-solid fa-user"></i>
            <div>
              <UncontrolledPopover
                placement="bottom"
                target="PopoverLegacy"
                autohide={true}
              >
                <PopoverHeader>{user.username}</PopoverHeader>
                <PopoverBody>
                  <DropdownItem href="#/action1">
                    <span onClick={handleLogout}>Logout</span>
                  </DropdownItem>
                </PopoverBody>
              </UncontrolledPopover>
            </div>
          </div>
        )}

        <Link to="/login">{!user && <div className="login">Login</div>}</Link>
        <Link to="/register">
          {!user && <div className="register">Register</div>}
        </Link>
        <i id="ShoppingCard" className="cart fa-solid fa-cart-shopping"></i>
        <div className="counter">2</div>
        <UncontrolledPopover
          placement="bottom"
          target="ShoppingCard"
          autohide={true}
        >
          <PopoverHeader>
            {" "}
            {cartItems.length === 0 && <h2>Cart Is Empty</h2>}
          </PopoverHeader>
          <PopoverBody>
            {cartItems.map((x, index) => (
              <div key={index}>
                <h1>quantity: {x.quantity}</h1>
              </div>
            ))}
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </div>
  );
}

export default Navbar;
