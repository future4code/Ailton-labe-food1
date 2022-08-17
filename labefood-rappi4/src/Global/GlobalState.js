import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/Url/url";
import goToPage from "../routes/coordinator";
import { alertSweet } from "../services/alertSweet/alertSweet";
import { alertCart } from "../services/alertSweet/alertCart";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;
  const token = localStorage.getItem("token");
  const currentRest = JSON.parse(localStorage.getItem("restaurant"));
  const [carrinho, setCarrinho] = useState([]);

  const placeOrder = (body, navigate) => {
    axios
      .post(`${BASE_URL}/restaurants/${currentRest.id}/order/`, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alertSweet("success", "Deu Certo!", "Pedido realizado com sucesso!");
        localStorage.removeItem("cartShop");
        localStorage.removeItem("restaurant");
        goToPage(navigate, "");
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 409") {
          alertSweet("warning", "Alerta!", "Já existe um pedido em andamento.");
        }
      });
  };

  const addProductToCart = (product, number, rest, navigate) => {
    if (number !== "") {
      if (currentRest === null || rest.id === currentRest.id) {
        const localStorageCarrinho = JSON.parse(
          localStorage.getItem("cartShop") || "[]"
        );

        localStorageCarrinho.push({ products: product, quantity: number });

        localStorage.setItem("cartShop", JSON.stringify(localStorageCarrinho));

        setCarrinho(JSON.parse(localStorage.getItem("cartShop")));

        restaurantDetails(rest);
      } else {
        alertCart(currentRest, navigate);
      }
    }
  };

  const checkRestaurant = () => {
    if (carrinho.length === 1) {
      localStorage.removeItem("restaurant");
    }
  };

  const removeProductFromCart = (id) => {
    const localStorageCarrinho = JSON.parse(localStorage.getItem("cartShop"));

    const arrayProductRemoved = localStorageCarrinho.filter((obj) => {
      return id !== obj.products.id;
    });

    localStorage.setItem("cartShop", JSON.stringify(arrayProductRemoved));

    setCarrinho(JSON.parse(localStorage.getItem("cartShop")));

    checkRestaurant();
  };

  const restaurantDetails = (rest) => {
    localStorage.setItem("restaurant", JSON.stringify(rest));
  };

  const values = {
    functionAdd: addProductToCart,
    functionRemove: removeProductFromCart,
    placeOrder: placeOrder,
  };

  return <Provider value={values}>{props.children}</Provider>;
}
