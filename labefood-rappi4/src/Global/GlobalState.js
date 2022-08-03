import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;

  const [cartProducts, setCartProducts] = useState([]);

  //   ADICIONAR PRODUTO AO CARRINHO
  const addProductToCart = (product) => {
    let addingNewProduct = [...cartProducts, product];
    setCartProducts(addingNewProduct);
  };

  
  // REMOVE PRODUTO DO CARRINHO
  const removeProductFromCart = (id) => {
    const arrayProductRemoved = cartProducts.filter((product) => {
      return id !== product.id;
    });
    setCartProducts(arrayProductRemoved);
  };

  const values = {
    functionAdd: addProductToCart,
    functionRemove: removeProductFromCart,
    cartProducts: cartProducts,
  };

  return <Provider value={values}>{props.children}</Provider>;
}
