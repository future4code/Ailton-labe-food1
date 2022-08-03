import React, { useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GlobalContext } from "./GlobalContext";
import useRestDetails from "../hooks/useRestDetails";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;

  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [restaurant, setRestaurant] = useState('');

  //   ADICIONAR PRODUTO AO CARRINHO
  const addProductToCart = (product, number) => {
    for (let i = 0; i < number; i++) {
      cartProducts.push({ product: product, price: product.price });
    }

    let addingNewPrice = [
      ...totalPrice,
      { product: product, totalPrice: number * product.price },
    ];
    setTotalPrice(addingNewPrice);
  };

  const sumPrices = cartProducts
    .map((obj) => {
      return obj.price;
    })
    .reduce((curr, prev) => curr + prev, 0);

  // REMOVE PRODUTO DO CARRINHO
  const removeProductFromCart = (product) => {
    const arrayProductRemoved = cartProducts.filter((obj) => {
      return product !== obj.product;
    });
    setCartProducts(arrayProductRemoved);
  };

  const restaurantDetails = (rest) => {
    setRestaurant(rest)
  }

  console.log(restaurant)

  const values = {
    functionAdd: addProductToCart,
    functionRemove: removeProductFromCart,
    cartProducts: cartProducts,
    sumPrices: sumPrices,
    restaurantDetails: restaurantDetails,
    restaurant: restaurant,
  };

  return <Provider value={values}>{props.children}</Provider>;
}
