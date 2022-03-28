import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/store";
import "./product.css";

function Product() {
  const [pizza, setPizza] = useState([]);
  const [size, setSize] = useState(0);
  const { cartItems, setCartItems } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    getPizza();
    console.log(pizza);
  }, [size]);

  const getPizza = async () => {
    const res = await axios.get(`/pizzas/${id}`);
    setPizza(res.data);
  };

  const onAdd = () => {
    const productToAdd = pizza.find((p) => p.size === size);

    if (productToAdd) {
      const exist = cartItems.find((x) => x._id === productToAdd._id);

      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x._id === productToAdd._id
              ? {
                  ...x,
                  quantity: quantity,
                }
              : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...productToAdd, quantity }]);
      }
    } else {
      alert("Oops product not available");
    }
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-img">
          <img src={pizza.picture} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1 className="product-title">{pizza.title}</h1>
        <p className="product-desc">{pizza.description}</p>
        {pizza.prices && (
          <span className="product-price">{pizza.prices[size]}€</span>
        )}
        <h3 className="product-choose">Choose the size</h3>
        <div className="sizes">
          <div className="pizza-size" onClick={() => setSize(0)}>
            <img src="/img/size.png" alt="" />
            <span className="number">Small</span>
          </div>
          <div className="pizza-size" onClick={() => setSize(1)}>
            <img src="/img/size.png" alt="" />
            <span className="number">Medium</span>
          </div>
          <div className="pizza-size" onClick={() => setSize(2)}>
            <img src="/img/size.png" alt="" />
            <span className="number">Large</span>
          </div>
        </div>
        <h3 className="product-choose">Choose additional ingredients</h3>
        <div className="product-ingredients">
          {pizza.extraOptions &&
            pizza.extraOptions.map((option, index) => (
              <div className="product-option" key={index}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  className="product-checkbox"
                />

                <label htmlFor="garlic">{option.text}</label>
              </div>
            ))}
        </div>
        <div className="product-add">
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className="product-quantity"
          />
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
