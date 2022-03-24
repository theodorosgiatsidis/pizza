import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/store";
import "./product.css";

function Product() {
  const [pizza, setPizza] = useState([]);
  const [size, setSize] = useState(0);
  const [products] = useState([]);
  const { cartItems, setCartItems } = useContext(StoreContext);
  const [quantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    getPizza();
    console.log(pizza);
  }, []);

  const getPizza = async () => {
    const res = await axios.get(`/pizzas/${id}`);
    setPizza(res.data);
  };

  const onAdd = () => {
    if (!size) {
      alert("Select a Size Option");
      return;
    }

    if (products) {
      const exist = cartItems.find((x) => x._id === products._id);

      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x._id === products._id
              ? {
                  ...x,
                  quantity,
                }
              : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...products, quantity }]);
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
        <span className="product-price">{pizza.price} €</span>
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
          <div className="product-option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="product-checkbox"
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="product-option">
            <input
              className="product-checkbox"
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className="product-option">
            <input
              className="product-checkbox"
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className="product-option">
            <input
              className="product-checkbox"
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className="product-add">
          <input
            type="number"
            defaultValue={quantity}
            className="product-quantity"
          />
          <button className="product-button" onClick={onAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
