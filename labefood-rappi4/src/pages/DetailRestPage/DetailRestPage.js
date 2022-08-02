import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useProtectedPage from "../../hooks/useProtected";
import useRestDetails from "../../hooks/useRestDetails";
import Header from "../../components/Header/Login-Signup/header";
import { GlobalContext } from "../../Global/GlobalContext";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    #rest-logo {
      width: 90%;
      height: 120px;
      object-fit: cover;
      object-position: 0 0 1rem 5rem;
      border-radius: 14px 14px 0px 0px;
      border: solid 1px #b8b8b8;
    }
  }
`;

const ContainerRestInfo = styled.div`
  width: 90%;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  #restaurant-name {
    color: #e86e5a;
    font-size: 16px;
  }

  #delivery-shipping {
    display: flex;
    gap: 2rem;
  }

  p {
    color: #b8b8b8;
    font-size: 16px;
  }
`;

const ContainerMainFood = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 1rem;

  hr {
    width: 100%;
    border-bottom: solid 1px black;
    margin: 8px 0 12px 0;
  }

  div {
    height: 100%;
    width: 100%;
  }
`;

const ContainerMap = styled.div`
  display: flex;
  border: solid 1px #b8b8b8;
  height: 112px;
  position: relative;
  margin: 8px 0;
  align-items: center;
  border-radius: 8px;
  gap: 12px;

  img {
    min-width: 105px;
    max-width: 105px;
    min-height: 105px;
    max-height: 105px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  #quantity {
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    height: 33px;
    font-size: 16px;
    color: #e86e5a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 9px 16px;
    padding: 7px 12px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border: solid 1px #e86e5a;
  }

  #container-info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    #product-name {
      color: #e86e5a;
      font-size: 16px;
    }

    #product-description {
      color: #b8b8b8;
      font-size: 14px;
    }

    #product-price {
      color: black;
      font-size: 16px;
    }
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 31px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 1px #000;
    font-size: 13px;
    text-align: center;
    color: #000;
  }
`;

function DetailRestPage() {
  useProtectedPage();
  const pathParams = useParams();
  const restDetails = useRestDetails(pathParams.id);

  const values = useContext(GlobalContext);

  const quantityCart = (arr, product) => {
    var qtd = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === product) {
        qtd++;
      }
    }
    return qtd;
  };

  return (
    <Container>
      <Header page="" title="Restaurant" />
      <main>
        <img id="rest-logo" src={restDetails.logoUrl} alt="logo" />
        <ContainerRestInfo>
          <p id="restaurant-name">{restDetails.name}</p>
          <p>{restDetails.category}</p>
          <div id="delivery-shipping">
            <p>
              {restDetails.deliveryTime - 10} - {restDetails.deliveryTime} min
            </p>
            <p>Frete R${restDetails.shipping},00</p>
          </div>
          <p>{restDetails.address}</p>
        </ContainerRestInfo>
        <ContainerMainFood>
          <p>Principais</p>
          <hr />
          {restDetails.products?.map((product) => {
            return (
              <ContainerMap>
                <img src={product.photoUrl} alt="produto" />
                <div id="container-info">
                  <p id="product-name">{product.name}</p>
                  <p id="product-description">{product.description}</p>
                  <p id="product-price">
                    <strong>R${product.price}</strong>
                  </p>
                </div>
                {values.cartProducts.includes(product) && (
                  <div id="quantity">
                    {quantityCart(values.cartProducts, product)}
                  </div>
                )}
                {/* {values.cartProducts.includes(product) ? (
                  <button onClick={() => values.functionRemove(product.id)}>
                    Remover
                  </button>
                ) : ( */}
                <button onClick={() => values.functionAdd(product)}>
                  Adicionar
                </button>
                {/* )} */}
              </ContainerMap>
            );
          })}
        </ContainerMainFood>
      </main>
    </Container>
  );
}

export default DetailRestPage;
