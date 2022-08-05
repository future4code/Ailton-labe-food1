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

function CartPage() {
  useProtectedPage();
  const values = useContext(GlobalContext);
  const profile = useGetProfileDetails();
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState("money");
  const [bodyPlaceOrder, setBodyPlaceOrder] = useState({});
  const navigate = useNavigate();

  const productsArray = values.arrUnique.map((obj) => {
    return { id: obj.product.id, quantity: obj.quantity };
  });

  useEffect(() => {
    const setBodyOrderPlace = () => {
      setBodyPlaceOrder({
        products: productsArray,
        paymentMethod: currentPaymentMethod,
      });
    };
    setBodyOrderPlace();
  }, [currentPaymentMethod, values.arrUnique]);

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
      {values.restaurant ? (
        <ContainerRestInfo>
          <p id="restaurant-name">{values.restaurant.name}</p>
          <p>{values.restaurant.address}</p>
          <div id="delivery-shipping">
            <p>
              {values.restaurant.deliveryTime - 10} -{" "}
              {values.restaurant.deliveryTime} min
            </p>
          </div>
        </ContainerRestInfo>
      ) : (
        <Texto>Carrinho vazio</Texto>
      )}
      <ContainerCards>
        {values.arrUnique.map((obj) => {
          return (
            <ContainerMap key={obj.product.id}>
              <img src={obj.product.photoUrl} alt="produto" />
              <div id="container-info">
                <p id="product-name">{obj.product.name}</p>
                <p id="product-description">{obj.product.description}</p>
                <p id="obj.product-price">
                  <strong>
                    R${Math.round(obj.product.price * obj.quantity)}
                  </strong>
                </p>
              </div>
              <div id="quantity">{obj.quantity}</div>
              <button
                id="button-remove"
                onClick={() => values.functionRemove(obj.product)}
              >
                Remover
              </button>
            </ContainerMap>
          );
        })}
      </ContainerCards>
      <DivTotal>
        {values.sumPrices ? (
          <strong>
            <Texto2>Frete R$ {values.restaurant.shipping},00</Texto2>
          </strong>
        ) : (
          <Texto2>Frete R$ 0,00</Texto2>
        )}
        <Subtotal>
          <p>SUBTOTAL</p>
          <PRed>
            {values.sumPrices ? (
              <strong>
                R$ {Math.round(values.restaurant.shipping + values.sumPrices)}
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
