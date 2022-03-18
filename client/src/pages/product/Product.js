import React, { useState } from "react";
import "./product.css";

function Product() {
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "MARGARITA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem sdjsdksgdsghfgk fsf skfshkfh sfg sghf s",
  };

  const [size, setSize] = useState(0);

  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-img">
          <img src={pizza.img} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1 className="product-title">{pizza.name}</h1>
        <span className="product-price">{pizza.price[size]}</span>
        <p className="product-desc">{pizza.desc}</p>
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
          <input type="number" defaultValue={1} className="product-quantity" />
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
