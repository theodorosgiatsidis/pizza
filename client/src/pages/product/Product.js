import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/store";
import usePizzas from "../../hooks/usePizzas";
import "./product.css";

function Product() {
  const pizzas = usePizzas();
  const [pizza, setPizza] = useState([]);
  const { size, setSize } = useContext(StoreContext);
  const { cartItems, setCartItems } = useContext(StoreContext);
  const { quantity } = useContext(StoreContext);
  const { id } = useParams();
  const { user } = useContext(StoreContext);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    const res = await axios.get(`/pizzas/${id}`, {
      headers: {
        "x-access-token": user.accessToken,
      },
    });
    setPizza(res.data);
  };

  const onAdd = () => {
    const productToAdd = pizzas.find((p) => p._id === id);
    if (productToAdd) {
      const exist = cartItems.find((x) => x._id === productToAdd._id);

      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x._id === productToAdd._id
              ? {
                  ...x,
                  quantity,
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

  // const uniqueSizes = [
  //   ...new Map(pizzas.map((item) => [item.sizes, item.sizes])).values(),
  // ];

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
            <img className="img-1" src="/img/size.png" alt="" />
            <span className="number">Small</span>
          </div>
          <div className="pizza-size" onClick={() => setSize(1)}>
            <img className="img-2" src="/img/size.png" alt="" />
            <span className="number">Medium</span>
          </div>
          <div className="pizza-size" onClick={() => setSize(2)}>
            <img className="img-3" src="/img/size.png" alt="" />
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
                  price={option.price}
                />

                <label htmlFor="garlic">{option.text}</label>
              </div>
            ))}
        </div>
        <div className="product-add">
          <button onClick={onAdd} className="product-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
