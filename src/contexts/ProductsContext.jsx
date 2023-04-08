import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";

export const productsContext = createContext();

const initialState = {
  products: [],
  oneProduct: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

function ProductsContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
  };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContext;
