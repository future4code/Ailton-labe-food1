import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;

  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product, number) => {
    if (number > 0 ) {
      for (let i = 0; i < number; i++) {
        let addingNewProduct = [...cartProducts, product];
        setCartProducts(addingNewProduct);
      }
    } 
    // else {
    //   let addingNewProduct = [...cartProducts, product];
    //   setCartProducts(addingNewProduct);
    // }
  };

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
