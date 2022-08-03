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

function CartPage() {
  useProtectedPage();
  const values = useContext(GlobalContext);
  const profile = useGetProfileDetails();

  // const novaArr = values.cartProducts.filter((obj, index) => {
  //   if(obj[index] !== obj[index+1]) {
  //     return obj
  //   }
  // })

  // console.log(novaArr);

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
      <ContainerCards></ContainerCards>
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
