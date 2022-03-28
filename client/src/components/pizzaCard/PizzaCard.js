import { useHistory } from "react-router-dom";
import "./pizzaCard.css";

function PizzaCard(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/pizzas/${props.id}`);
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
        <span className="pizza-price">{props.price[0]}€</span>
      </div>
    </div>
  );
}

export default PizzaCard;
