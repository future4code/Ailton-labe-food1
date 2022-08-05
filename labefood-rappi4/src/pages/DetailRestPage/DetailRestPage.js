import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtected";
import useRestDetails from "../../hooks/useRestDetails";
import Header from "../../components/Header/Login-Signup/header";
import { GlobalContext } from "../../Global/GlobalContext";
import { Spinner } from "@chakra-ui/react";
import { Container, ContainerRestInfo, ContainerMainFood, ContainerMap, ContainerQuantity, ContainerForm, Loading } from "./style"

function DetailRestPage() {
  useProtectedPage();
  const pathParams = useParams();
  const restDetails = useRestDetails(pathParams.id);
  const [number, setNumber] = useState("");
  const [checkToRenderContainerSelect, setCheckToRenderContainerSelect] =
    useState(false);
  const [arrayCheckId, setArrayCheckId] = useState([]);

  const values = useContext(GlobalContext);

  const quantityCart = (arr, product) => {
    var qtd = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].product === product) {
        qtd++;
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
    values.functionAdd(product, number);
    values.restaurantDetails(restDetails);
    setCheckToRenderContainerSelect(false);
  };

  const checkProduct = (product) => {
    for (let i = 0; i < values.arrUnique.length; i++) {
      if (values.arrUnique[i].product === product) {
        return true;
      }
    }
  };

  const renderProductsMap = (
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8
  ) => {
    return restDetails.products
      ?.filter((product) => {
        return (
          product.category === category1 ||
          product.category === category2 ||
          product.category === category3 ||
          product.category === category4 ||
          product.category === category5 ||
          product.category === category6 ||
          product.category === category7 ||
          product.category === category8
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
            {checkProduct(product) && (
              <div id="quantity">
                {quantityCart(values.cartProducts, product)}
              </div>
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
                    <form onSubmit={() => addProductToCart(product)}>
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
                      <button id="button-add-to-cart" type="submit">
                        ADICIONAR AO CARRINHO
                      </button>
                    </form>
                  </ContainerForm>
                </div>
              </ContainerQuantity>
            )}
            {checkProduct(product) ? (
              <button
                id="button-remove"
                onClick={() => values.functionRemove(product)}
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
              <p>Principais</p>
              <hr />
              {renderProductsMap(
                "Lanche",
                "Pastel",
                "Salgado",
                "Lanche",
                "Pizza",
                "Refeição",
                "Sorvete",
                "Doce"
              )}
              <p>Acompanhamentos</p>
              <hr />
              {renderProductsMap("Acompanhamento", "Bebida", "Outros")}
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
