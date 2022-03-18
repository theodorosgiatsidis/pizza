import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./pizzaCard.css";

function PizzaCard() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/product/1");
  };

  return (
    <div className="pizzaCard">
      <img
        onClick={handleClick}
        src="/img/pizza.png"
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
      <h1 className="card-title">FIORI DE ZUCCA</h1>
      <span className="card-price">$19.90</span>
      <p className="card-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default PizzaCard;
