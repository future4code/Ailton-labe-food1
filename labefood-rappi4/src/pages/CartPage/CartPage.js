import React, { useContext, useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtected";
import NavegationFeed from "../../components/Footer/navegationFeed";
import radiobutton from "../../assets/images/radiobutton.svg";
import radiobutton2 from "../../assets/images/radiobutton2.svg";
import {
  Container,
  DivEndereco,
  P,
  Texto,
  Texto2,
  DivTotal,
  PRed,
  Subtotal,
  Texto3,
  DivPagamento,
  DivPagamento2,
  Hr,
  Texto4,
  ButtonEntrar,
  ContainerRestInfo,
  ContainerCards,
  ContainerMap,
} from "./styled";
import Header from "./../../components/Header/Login-Signup/header";
import { GlobalContext } from "../../Global/GlobalContext";
import useGetProfileDetails from "../../hooks/useGetProfileDetails";
import { useNavigate } from "react-router-dom";
import useProtectedAdress from "../../hooks/useProtectedAdress";

function CartPage() {
  useProtectedPage();
  useProtectedAdress()
  const values = useContext(GlobalContext);
  const profile = useGetProfileDetails();
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState("money");
  const [bodyPlaceOrder, setBodyPlaceOrder] = useState({});
  const navigate = useNavigate();

  const carrinho = JSON.parse(localStorage.getItem("cartShop") || "[]");
  const currentRest = JSON.parse(localStorage.getItem("restaurant")) || "[]";

  const productsArray = carrinho.map((obj) => {
    return { id: obj.products.id, quantity: obj.quantity };
  });

  useEffect(() => {
    const setBodyOrderPlace = () => {
      setBodyPlaceOrder({
        products: productsArray,
        paymentMethod: currentPaymentMethod,
      });
    };
    setBodyOrderPlace();
  }, [currentPaymentMethod]);

  const sumPrices = carrinho
    .map((obj) => {
      return obj.products.price * obj.quantity;
    })
    .reduce((curr, prev) => curr + prev, 0);

  return (
    <Container>
      <Header page="" title="Carrinho" />

      <DivEndereco>
        <P>Endereço de entrega</P>
        {profile.street && profile.number && (
          <p>
            <strong>
              {profile.street}, {profile.number}
            </strong>
          </p>
        )}
      </DivEndereco>
      {currentRest.name && currentRest.address ? (
        <ContainerRestInfo>
          <p id="restaurant-name">{currentRest.name}</p>
          <p>{currentRest.address}</p>
          <div id="delivery-shipping">
            <p>
              {currentRest.deliveryTime - 10} - {currentRest.deliveryTime} min
            </p>
          </div>
        </ContainerRestInfo>
      ) : (
        <Texto>Carrinho vazio</Texto>
      )}
      <ContainerCards>
        {carrinho.map((obj) => {
          return (
            <ContainerMap key={obj.products.id}>
              <img src={obj.products.photoUrl} alt="produto" />
              <div id="container-info">
                <p id="product-name">{obj.products.name}</p>
                <p id="product-description">{obj.products.description}</p>
                <p id="obj.product-price">
                  <strong>
                    R${Math.round(obj.products.price * obj.quantity)}
                  </strong>
                </p>
              </div>
              <div id="quantity">{obj.quantity}</div>
              <button
                id="button-remove"
                onClick={() => values.functionRemove(obj.products.id)}
              >
                Remover
              </button>
            </ContainerMap>
          );
        })}
      </ContainerCards>
      <DivTotal>
        {sumPrices ? (
          <strong>
            <Texto2>Frete R$ {currentRest.shipping},00</Texto2>
          </strong>
        ) : (
          <Texto2>Frete R$ 0,00</Texto2>
        )}
        <Subtotal>
          <p>SUBTOTAL</p>
          <PRed>
            {sumPrices ? (
              <strong>
                R$ {Math.round(currentRest.shipping + sumPrices)}
                ,00
              </strong>
            ) : (
              <strong>R$ 0,00</strong>
            )}
          </PRed>
        </Subtotal>
      </DivTotal>
      <DivPagamento>
        <Texto3> Forma de Pagamento</Texto3>
      </DivPagamento>
      <Hr />
      <DivPagamento>
        {currentPaymentMethod === "money" ? (
          <img
            src={radiobutton}
            alt="button"
            onClick={() => setCurrentPaymentMethod("")}
          />
        ) : (
          <img
            src={radiobutton2}
            alt="button"
            onClick={() => setCurrentPaymentMethod("money")}
          />
        )}
        <Texto4>Dinheiro</Texto4>
      </DivPagamento>
      <DivPagamento2>
        {currentPaymentMethod === "creditcard" ? (
          <img
            src={radiobutton}
            alt="button"
            onClick={() => setCurrentPaymentMethod("")}
          />
        ) : (
          <img
            src={radiobutton2}
            alt="button"
            onClick={() => setCurrentPaymentMethod("creditcard")}
          />
        )}
        <Texto4>Cartão</Texto4>
      </DivPagamento2>

      <ButtonEntrar onClick={() => values.placeOrder(bodyPlaceOrder, navigate)}>
        <strong>Confirmar</strong>
      </ButtonEntrar>
      <NavegationFeed page={"cart"} />
    </Container>
  );
}

export default CartPage;
