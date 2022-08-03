import React from "react";
import useProtectedPage from "../../hooks/useProtected";
import NavegationFeed from "../../components/Footer/navegationFeed";
import radiobutton from "../../assets/images/radiobutton.svg"
import radiobutton2 from "../../assets/images/radiobutton2.svg"
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
  ButtonEntrar
} from "./styled";
import Header from "./../../components/Header/Login-Signup/header";


function CartPage() {
  useProtectedPage();

  return (
    <Container>
      <Header page="" title="Carrinho" />

      <DivEndereco>
        <P>Endereço de entrega</P>
        <p>Rua Alessandra Vieira, 42</p>
      </DivEndereco>
      <Texto>Carrinho vazio</Texto>
      <DivTotal>
        <Texto2>Frete R$ 0,00</Texto2>
        <Subtotal>
          <p>SUBTOTAL</p>
          <PRed>
            <strong>R$ 00,00</strong>
          </PRed>
        </Subtotal>
      </DivTotal>
      <DivPagamento>
        <Texto3> Forma de Pagamento</Texto3>
      </DivPagamento>
      <Hr />
      <DivPagamento>
      <img src={radiobutton} alt="button"/><Texto4>Dinheiro</Texto4>
      </DivPagamento>
      <DivPagamento2>
      <img src={radiobutton2} alt="button"/><Texto4>Cartão</Texto4>
      </DivPagamento2>

      <ButtonEntrar><strong>Confirmar</strong></ButtonEntrar>
      <NavegationFeed page={'cart'} />
    </Container>
  );
}

export default CartPage;
