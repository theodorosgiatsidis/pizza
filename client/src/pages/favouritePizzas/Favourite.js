import React, { useContext } from "react";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import { StoreContext } from "../../context/store";
import "./favourite.css";

function Favourite() {
  const { favouritePizzas } = useContext(StoreContext);

  return (
    <div className="fav-pizzas-container">
      <div className="fav-pizzas">
        <h1 className="fav-pizzas-title">My Favourite pizzas</h1>
        <div className="pizzas">
          {favouritePizzas.map((product, index) => (
            <div className="map-pizzas" key={index}>
              <PizzaCard
                title={product.title}
                description={product.description}
                picture={product.picture}
                id={product._id}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
