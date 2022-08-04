import React, { useContext, useState } from "react";
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
} from "./styled";
import Header from "./../../components/Header/Login-Signup/header";
import { GlobalContext } from "../../Global/GlobalContext";
import useGetProfileDetails from "../../hooks/useGetProfileDetails";
import { MdNoMeals } from "react-icons/md";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/Url/url";

const ContainerMap = styled.div`
  display: flex;
  border: solid 1px #b8b8b8;
  height: 112px;
  position: relative;
  margin: 8px 0;
  align-items: center;
  border-radius: 8px;
  gap: 12px;
  width: 90%;

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

  #button-remove {
    border: solid 1px #e86e5a;
    color: #e86e5a;
  }
`;

function CartPage() {
  useProtectedPage();
  const values = useContext(GlobalContext);
  const profile = useGetProfileDetails();
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('money');
  const [bodyPlaceOrder, setBodyPlaceOrder] = useState({});
  const token = localStorage.getItem("token");

  const productsArray = values.arrUnique.map((obj) => {
    return {id: obj.product.id, quantity: obj.quantity}
  })


  const placeOrder = () => {
    setBodyOrderPlace()
    axios.post(`${BASE_URL}/restaurants/${values.restaurant.id}/order`, bodyPlaceOrder, {
      headers: {
        auth: token,
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      // alert('Já existe pedido em andamento.')
      console.log(err.response.message)
    })
  }

  const setBodyOrderPlace = () => {
    setBodyPlaceOrder({
      products: productsArray,
      paymentMethod: currentPaymentMethod,
    })
  }


  // TRANSFORMAR EM HOOK E RENDERIZAR NO FEED (IGUAL USEPROTECT) PARA RENDERIZAR O PEDIDO EM ANDAMENTO FIXO
  // const getPlaceOrder = () => {
  //   axios.get(`${BASE_URL}/active-order`, {
  //     headers: {
  //       auth: token,
  //     }
  //   }).then((res) => {
  //     console.log(res)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  
  return (
    <Container>
      <Header page="" title="Carrinho" />

      <DivEndereco>
        <P>Endereço de entrega</P>
        <p>
          <strong>
            {profile.street}, {profile.number}
          </strong>
        </p>
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
        {currentPaymentMethod === 'money' ? (
          <img
            src={radiobutton}
            alt="button"
            onClick={() => setCurrentPaymentMethod("")}
          />
        ) : (
          <img
            src={radiobutton2}
            alt="button"
            onClick={() => setCurrentPaymentMethod('money')}
          />
        )}
        <Texto4>Dinheiro</Texto4>
      </DivPagamento>
      <DivPagamento2>
        {currentPaymentMethod === 'creditcard' ? (
          <img src={radiobutton} alt="button" onClick={() => setCurrentPaymentMethod("")}/>
        ) : (
          <img src={radiobutton2} alt="button" onClick={() => setCurrentPaymentMethod('creditcard')}/>
        )}
        <Texto4>Cartão</Texto4>
      </DivPagamento2>

      <ButtonEntrar onClick={() => placeOrder()}>
        <strong>Confirmar</strong>
      </ButtonEntrar>
      <NavegationFeed page={"cart"} />
    </Container>
  );
}

export default CartPage;
