import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../../context/store";
import usePizzas from "../../hooks/usePizzas";
import "./pizzaCard.css";

function PizzaCard(props) {
  const history = useHistory();
  const { favouritePizzas, setFavouritePizzas } = useContext(StoreContext);
  const pizzas = usePizzas();

  const handleClick = () => {
    history.push(`/pizzas/${props.id}`);
  };

  const addToFavorite = (id) => {
    const favouritePizza = pizzas.find((c) => c._id === id);

    setFavouritePizzas([...favouritePizzas, favouritePizza]);
  };

  const onRemoveFavourite = (id) => {
    const filteredList = favouritePizzas.filter((c) => c._id !== id);
    setFavouritePizzas(filteredList);
  };

  const ifExists = (id) => {
    return favouritePizzas.some((item) => item._id == id);
  };

  return (
    <div className="pizzaCard">
      <div className="pizzaWrapper">
        <h1 className="pizza-title">{props.title}</h1>
        <img
          className="pizza-img"
          onClick={handleClick}
          src={props.picture}
          alt="pizza"
        />
        <p className="pizza-desc">{props.description}</p>
        <span className="pizza-price">{props.price && props.price[0]}€</span>
        <div className="p-icon">
          <i
            style={{ color: "red" }}
            onClick={() =>
              ifExists(props.id)
                ? onRemoveFavourite(props.id)
                : addToFavorite(props.id)
            }
            className={
              ifExists(props.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"
            }
          ></i>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
