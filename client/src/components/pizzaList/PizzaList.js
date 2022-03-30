import React, { useContext, useEffect } from "react";
import usePizzas from "../../hooks/usePizzas";
import PizzaCard from "../pizzaCard/PizzaCard";
import "./pizzaList.css";

function PizzaList() {
  const pizzas = usePizzas();

  return (
    <div className="pizzaList">
      <div className="list-wrapper">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza._id}
            title={pizza.title}
            picture={pizza.picture}
            description={pizza.description}
            price={pizza.prices}
            id={pizza._id}
          />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
