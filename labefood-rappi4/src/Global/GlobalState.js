import React, { useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GlobalContext } from "./GlobalContext";
import useRestDetails from "../hooks/useRestDetails";
import axios from "axios";
import { BASE_URL } from "../constants/Url/url";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;

  const [cartProducts, setCartProducts] = useState([]);
  const [arrUnique, setArrUnique] = useState([]);
  const [restaurant, setRestaurant] = useState("");
  const token = localStorage.getItem("token");

  const placeOrder = (body) => {
    axios
      .post(`${BASE_URL}/restaurants/${values.restaurant.id}/order`, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert('Pedido realizado com sucesso')
        setArrUnique([])
        setCartProducts([])
        setRestaurant('')
      })
      .catch((err) => {
        console.log(err)
        if(err.message === "Request failed with status code 409") {
          alert('Já existe um pedido em andamento')
        }
      });
  };

  //   ADICIONAR PRODUTO AO CARRINHO
  const addProductToCart = (product, number) => {
    for (let i = 0; i < number; i++) {
      cartProducts.push({ product: product, price: product.price });
    }

    let addingNewProduct = [
      ...arrUnique,
      { product: product, quantity: number },
    ];
    setArrUnique(addingNewProduct);
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

    const arrayCartRemoved = arrUnique.filter((obj) => {
      return product !== obj.product;
    });
    setArrUnique(arrayCartRemoved);
  };

  const restaurantDetails = (rest) => {
    setRestaurant(rest);
  };

  const values = {
    functionAdd: addProductToCart,
    functionRemove: removeProductFromCart,
    cartProducts: cartProducts,
    sumPrices: sumPrices,
    restaurantDetails: restaurantDetails,
    restaurant: restaurant,
    arrUnique: arrUnique,
    placeOrder: placeOrder,
  };

  return <Provider value={values}>{props.children}</Provider>;
}
