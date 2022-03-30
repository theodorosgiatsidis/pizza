import { StoreContext } from "../context/store";
import { useContext, useEffect } from "react";
import axios from "axios";

const usePizzas = () => {
  const { pizzas, setPizzas } = useContext(StoreContext);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await axios.get("/pizzas");
    setPizzas(res.data);
  };

  return pizzas;
};

export default usePizzas;
