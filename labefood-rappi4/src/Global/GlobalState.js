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

  //Função que faz o pedido na tela de carrinho
  const placeOrder = (body, navigate) => {
    axios
      .post(`${BASE_URL}/restaurants/${currentRest.id}/order`, body, {
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

  //Adiciona um produto no carrinho quando:
  //1) Se não tiver um restaurente no localStorage ou,
  //2) Se o restaurante que estiver no localStorage for igual ao da página q ele está.
  // Adiciona o produto no localStorage junto com a quantidade q foi escolhida (linha 59)
  // Caso a condicional 1 e 2 não for true, ele vai retornar um alert dizendo que existe produto de outra loja no carrinho
  // linha 68.
  const addProductToCart = (product, number, rest, navigate) => {
    if (currentRest === null || rest.id === currentRest.id) {
      //pega o carrinho no localStorage se tiver, senão traz um array vazio
      const localStorageCarrinho = JSON.parse(
        localStorage.getItem("cartShop") || "[]"
      );

      //adiciona o novo produto no array
      localStorageCarrinho.push({ products: product, quantity: number });

      //seta o item no localStorage como esse novo array
      localStorage.setItem("cartShop", JSON.stringify(localStorageCarrinho));

      //atualiza o carrinho do state com o novo valor do localStorage
      setCarrinho(JSON.parse(localStorage.getItem("cartShop")));

      //seta o restaurante no localStorage
      restaurantDetails(rest);
    } else {
      alertCart(currentRest, navigate);
    }
  };

  //Utilizada na função de remover item do carrinho, quando existir apenas um produto no carrinho e este ser deletado
  //ele também vai limpar o restaurante do localStorage (linha 75).
  //Contexto: quando a pessoa tenta adicionar um produto mas já existir um restaurante no localStorage vai dar erro,
  //então quando a pessoa excluir o ultimo produto do carrinho de um restaurante, vai deletar ele do localStorage, possibilitando
  //ele comprar de outros lugares sem dar erro.
  const checkRestaurant = () => {
    if (carrinho.length === 1) {
      localStorage.removeItem("restaurant");
    }
  };

  // Remove o produto e sua quantidade do carrinho, ele pega o array que está no localStorage e filtra
  // não tem nada de diferente das outras funções de remover
  // e no final checa se o produto que ele removeu era o ultimo ou não, se era o ultimo ele deleta o restaurante do local storage (linha 85)
  const removeProductFromCart = (id) => {
    //pega o carrinho do localStorage
    const localStorageCarrinho = JSON.parse(localStorage.getItem("cartShop"));

    //filtra o carrinho removendo o produto clicado (pelo id)
    const arrayProductRemoved = localStorageCarrinho.filter((obj) => {
      return id !== obj.products.id;
    });

    //seta no localStorage o novo array filtrado
    localStorage.setItem("cartShop", JSON.stringify(arrayProductRemoved));

    //atualiza o state
    setCarrinho(JSON.parse(localStorage.getItem("cartShop")));

    checkRestaurant();
  };

  // Função utilizada quando adicionamos um produto no carrinho, ele cria no localStorage o restaurente.
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
