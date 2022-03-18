import React from "react";
import PizzaCard from "../pizzaCard/PizzaCard";
import "./pizzaList.css";

function PizzaList() {
  return (
    <div className="pizzaList">
      <h1 className="list-title">THE BEST PIZZA IN TOWN</h1>
      <p className="list-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="list-wrapper">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
