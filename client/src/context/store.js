import React, { useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const StoreContext = React.createContext({
  ...INITIAL_STATE,
});

export const StoreContextProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [cartItems, setCartItems] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const [favouritePizzas, setFavouritePizzas] = useState([]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  useEffect(() => {
    const favouritePizzas = JSON.parse(localStorage.getItem("fav-pizzas"));
    if (favouritePizzas) {
      setFavouritePizzas(favouritePizzas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("fav-pizzas", JSON.stringify(favouritePizzas));
  }, [favouritePizzas]);

  return (
    <StoreContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        cartItems,
        setCartItems,
        pizzas,
        setPizzas,
        quantity,
        setQuantity,
        size,
        setSize,
        favouritePizzas,
        setFavouritePizzas,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
