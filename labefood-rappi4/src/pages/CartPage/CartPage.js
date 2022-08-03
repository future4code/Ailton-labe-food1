import React from "react";
import useProtectedPage from "../../hooks/useProtected";
import NavegationFeed from "../../components/Footer/navegationFeed";

function CartPage() {
  useProtectedPage();

  return (
    <div>
      Página do carrinho de todos os produtos adicionados pelo usuário, é
      possivel fazer a confirmação dos pedidos
      <NavegationFeed page={"cart"} />
    </div>
  );
}

export default CartPage;
