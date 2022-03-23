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

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <StoreContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        cartItems,
        setCartItems,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
