import React, { useContext } from "react";
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
import styled from "styled-components";


const ContainerMainFood = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 1rem;

  hr {
    width: 100%;
    border-bottom: solid 1px black;
    margin: 8px 0 12px 0;
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

  #button-remove {
    border: solid 1px #e86e5a;
    color: #e86e5a;
  }
`;

const ContainerQuantity = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  #background-top {
    height: 225px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  #background-bottom {
    height: 223px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #container-select {
    width: 90%;
    height: 216px;
    background-color: white;
    position: relative;
    

    p {
      width: 296px;
      height: 18px;
      margin: 40px 0 0 16px;
      font-size: 16px;
      letter-spacing: -0.39px;
      text-align: center;
      color: #000;
    }

    div {
      width: 296px;
      height: 56px;
      margin: 30px 16px 0;
      padding: 16px;
      border-radius: 4px;
      border: solid 1px #b8b8b8;
    }

    form {
      display: flex;
      justify-content: space-between;
      width: 25vw;
      height: 5vh;
    
      /* color: black;
      font-size: 16px;
      letter-spacing: -0.39px;
      height: 18px; */
    }

    #button-add-to-cart {
      bottom: 16px;
      right: 11px;
      border: none;
      width: 200px;
      letter-spacing: -0.39px;
      font-size: 16px;
      color: #4a90e2;
    }
  }
`;

function CartPage() {
  useProtectedPage();
  const values = useContext(GlobalContext);
  const profile = useGetProfileDetails();
//   const uniqueIds = []

// const uniqueProducts = values.cartProducts.filter((product) => {
//     const isDuplicate = uniqueIds.includes(product.id);

//     if (!isDuplicate) {
//       uniqueIds.push(product.id)

//       return true;
//     }

//       return false

// })
//       console.log(uniqueProducts)

  const setProductsCart = new Set ();
  const filterProducts = values.cartProducts.filter((product) => {
    const duplicatedProduct = setProductsCart.has(product.product.id);
    setProductsCart.add(product.product.id);

    if(!duplicatedProduct) {
      return true
    }

    return false
  })



  console.log(values)

  console.log(filterProducts);



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

      {filterProducts.map((product) => {
        return ( <ContainerMap key={product.id}>
        <img src={product.photoUrl} alt="produto" />
        <div id="container-info">
          <p id="product-name">{product.name}</p>
          <p id="product-description">{product.description}</p>
          <p id="product-price">
            <strong>R${product.price}</strong>
          </p>
        </div>
        </ContainerMap>
        )
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
                R$ {values.restaurant.shipping + values.sumPrices},00
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
        <img src={radiobutton} alt="button" />
        <Texto4>Dinheiro</Texto4>
      </DivPagamento>
      <DivPagamento2>
        <img src={radiobutton2} alt="button" />
        <Texto4>Cartão</Texto4>
      </DivPagamento2>

      <ButtonEntrar><strong>Confirmar</strong></ButtonEntrar>
      <NavegationFeed page={'cart'} />

    </Container>
  );
}

export default CartPage;
