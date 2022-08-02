import React from 'react'
import useProtectedPage from '../../hooks/useProtected'

function CartPage() {

  useProtectedPage()

  return (
    <div>Página do carrinho de todos os produtos adicionados pelo usuário, é possivel fazer a confirmação dos pedidos</div>
  )
}

export default CartPage