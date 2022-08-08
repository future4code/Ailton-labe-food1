import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtected";
import useRestDetails from "../../hooks/useRestDetails";
import Header from "../../components/Header/Login-Signup/header";
import { GlobalContext } from "../../Global/GlobalContext";
import { Spinner } from "@chakra-ui/react";
import {
  Container,
  ContainerRestInfo,
  ContainerMainFood,
  ContainerMap,
  ContainerQuantity,
  ContainerForm,
  Loading,
} from "./style";
import useProtectedAdress from "../../hooks/useProtectedAdress";

function DetailRestPage() {
  useProtectedPage();
  useProtectedAdress()
  const navigate = useNavigate();
  const pathParams = useParams();
  const values = useContext(GlobalContext);
  const [restDetails, restProducts] = useRestDetails(pathParams.id);
  const carrinho = JSON.parse(localStorage.getItem("cartShop") || "[]");
  const [number, setNumber] = useState("");
  const [checkToRenderContainerSelect, setCheckToRenderContainerSelect] =
    useState(false);
  const [arrayCheckId, setArrayCheckId] = useState([]);

  const checkProduct = (id) => {
    if (carrinho) {
      for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].products.id === id) {
          return true;
        }
      }
    }
  };

  const quantityCart = (id) => {
    var qtd = 0;
    for (var i = 0; i < carrinho.length; i++) {
      if (carrinho[i].products.id === id) {
        qtd = carrinho[i].quantity;
      }
    }
    return qtd;
  };

  const showToAddQuantity = (postId) => {
    setArrayCheckId(postId);
    setNumber("");
    setCheckToRenderContainerSelect(true);
  };

  const addProductToCart = (product) => {
    values.functionAdd(product, number, restDetails, navigate);
    setCheckToRenderContainerSelect(false);
  };

  const checkCategorys = (
    category1,
    category2,
    category3,
    category4,
    category5
  ) => {
    for (let i = 0; i < restProducts.length; i++) {
      if (
        restProducts[i].category === category1 ||
        restProducts[i].category === category2 ||
        restProducts[i].category === category3 ||
        restProducts[i].category === category4 ||
        restProducts[i].category === category5
      ) {
        return true;
      }
    }
  };

  const renderProductsMap = (
    category1,
    category2,
    category3,
    category4,
    category5
  ) => {
    return restDetails.products
      ?.filter((product) => {
        return (
          product.category === category1 ||
          product.category === category2 ||
          product.category === category3 ||
          product.category === category4 ||
          product.category === category5
        );
      })
      .map((product) => {
        return (
          <ContainerMap key={product.id}>
            <img src={product.photoUrl} alt="produto" />
            <div id="container-info">
              <p id="product-name">{product.name}</p>
              <p id="product-description">{product.description}</p>
              <p id="product-price">
                <strong>R${product.price}</strong>
              </p>
            </div>
            {checkProduct(product.id) && (
              <div id="quantity">{quantityCart(product.id)}</div>
            )}
            {arrayCheckId.includes(product.id) && checkToRenderContainerSelect && (
              <ContainerQuantity>
                <div
                  id="background-top"
                  onClick={() =>
                    setCheckToRenderContainerSelect(
                      !checkToRenderContainerSelect
                    )
                  }
                ></div>
                <div
                  id="background-bottom"
                  onClick={() =>
                    setCheckToRenderContainerSelect(
                      !checkToRenderContainerSelect
                    )
                  }
                ></div>
                <div id="container-select">
                  <p>Selecione a quantidade desejada</p>
                  <ContainerForm>
                    <form>
                      <select
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      >
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                      <button
                        id="button-add-to-cart"
                        type="button"
                        onClick={() => addProductToCart(product)}
                      >
                        ADICIONAR AO CARRINHO
                      </button>
                    </form>
                  </ContainerForm>
                </div>
              </ContainerQuantity>
            )}
            {checkProduct(product.id) ? (
              <button
                id="button-remove"
                onClick={() => values.functionRemove(product.id)}
              >
                Remover
              </button>
            ) : (
              <button onClick={() => showToAddQuantity(product.id)}>
                Adicionar
              </button>
            )}
          </ContainerMap>
        );
      });
  };

  return (
    <div>
      {restDetails.logoUrl && restDetails.name ? (
        <Container>
          <Header page="" title="Restaurante" />
          <main>
            <img id="rest-logo" src={restDetails.logoUrl} alt="logo" />
            <ContainerRestInfo>
              <p id="restaurant-name">{restDetails.name}</p>
              <p>{restDetails.category}</p>
              <div id="delivery-shipping">
                <p>
                  {restDetails.deliveryTime - 10} - {restDetails.deliveryTime}{" "}
                  min
                </p>
                <p>Frete R${restDetails.shipping},00</p>
              </div>
              <p>{restDetails.address}</p>
            </ContainerRestInfo>
            <ContainerMainFood>
              {checkCategorys(
                "Lanche",
                "Pastel",
                "Salgado",
                "Pizza",
                "Refeição"
              ) && (
                <div>
                  <p>Principais</p>
                  <hr />
                  {renderProductsMap(
                    "Lanche",
                    "Pastel",
                    "Salgado",
                    "Pizza",
                    "Refeição"
                  )}
                </div>
              )}
              {checkCategorys("Acompanhamento", "Outros") && (
                <div>
                  <p>Acompanhamentos</p>
                  <hr />
                  {renderProductsMap("Acompanhamento", "Outros")}
                </div>
              )}
              {checkCategorys("Sorvete", "Doce") ? ( //existe sorvete ou doce de categoria neste restaurante? se sim, renderiza
                <div>
                  <p>Doces</p>
                  <hr />
                  {renderProductsMap("Sorvete", "Doce")}
                </div>
              ) : null}
              {checkCategorys("Bebida") && (
                <div>
                  <p>Bebidas</p>
                  <hr />
                  {renderProductsMap("Bebida")}
                </div>
              )}
            </ContainerMainFood>
          </main>
        </Container>
      ) : (
        <Loading>
          <Spinner width="20px" height="20px" />
        </Loading>
      )}
    </div>
  );
}

export default DetailRestPage;
