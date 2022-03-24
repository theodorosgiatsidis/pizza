import axios from "axios";
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/store";
import PizzaCard from "../pizzaCard/PizzaCard";
import "./pizzaList.css";

function PizzaList() {
  const { pizzas, setPizzas } = useContext(StoreContext);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await axios.get("/pizzas");
    setPizzas(res.data);
  };

  return (
    <div className="pizzaList">
      <div className="list-wrapper">
        <h1 className="list-title">THE BEST PIZZA IN TOWN</h1>
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza._id}
            title={pizza.title}
            picture={pizza.picture}
            description={pizza.description}
            price={pizza.price}
            id={pizza._id}
          />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
