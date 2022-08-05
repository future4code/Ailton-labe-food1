import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/Url/url";
import goToPage from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;
  const [cartProducts, setCartProducts] = useState([]);
  const [arrUnique, setArrUnique] = useState([]);
  const [restaurant, setRestaurant] = useState("");
  const token = localStorage.getItem("token");

  const placeOrder = (body, navigate) => {
    axios
      .post(`${BASE_URL}/restaurants/${values.restaurant.id}/order`, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert("Pedido realizado com sucesso!");
        setArrUnique([]);
        setCartProducts([]);
        setRestaurant("");
        goToPage(navigate, "");
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 409") {
          alert("Já existe um pedido em andamento");
        } else if (
          err.request.response === '{"message":"Produto não encontrado"}'
        ) {
          setArrUnique([]);
          setCartProducts([]);
          setRestaurant("");
          alert(
            "Só é permitido a compra de produtos do mesmo estabelecimento por vez."
          );
        }
      });
  };

  const addProductToCart = (product, number) => {
    for (let i = 0; i < number; i++) {
      cartProducts.push({ product: product, price: product.price });
    }

    if (number !== "0" && number !== "") {
      let addingNewProduct = [
        ...arrUnique,
        { product: product, quantity: number },
      ];
      setArrUnique(addingNewProduct);
    }
  };

  const sumPrices = cartProducts
    .map((obj) => {
      return obj.price;
    })
    .reduce((curr, prev) => curr + prev, 0);

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
