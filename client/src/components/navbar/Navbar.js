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
  const { cartItems, setCartItems } = useContext(StoreContext);
  const { quantity, setQuantity } = useContext(StoreContext);
  const { size } = useContext(StoreContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location = "/";
  };

  const incrementCount = () => {
    setQuantity(quantity + 1);
  };

  const decrementCount = () => {
    setQuantity(quantity - 1);
  };

  const handleRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
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
        <div className="counter">{cartItems.length}</div>
        <UncontrolledPopover
          placement="bottom"
          target="ShoppingCard"
          autohide={true}
        >
          <PopoverHeader>
            {" "}
            {cartItems.length === 0 && <h1>Cart Is Empty</h1>}
          </PopoverHeader>
          <PopoverBody>
            {cartItems.map((product, index) => (
              <div className="cart-items" key={index}>
                <h1 className="cart-title">{product.title}</h1>
                <img className="cart-img" src={product.picture} alt="" />
                <i
                  onClick={decrementCount}
                  className=" minus fa-solid fa-minus"
                ></i>
                <span className="cart-quantity">{quantity}</span>
                <i
                  onClick={incrementCount}
                  className="plus fa-solid fa-plus"
                ></i>
                <span className="cart-size"></span>
                <span style={{ color: "green" }} className="cart-price">
                  {product.prices[size] * quantity} €
                  <i
                    onClick={() => handleRemove(product)}
                    className="trash fa-solid fa-trash-can"
                  ></i>
                </span>
              </div>
            ))}
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </div>
  );
}

export default Navbar;
