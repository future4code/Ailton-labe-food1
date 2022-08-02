import React from 'react'
import useProtectedPage from '../../hooks/useProtected'

function DetailRestPage() {

  useProtectedPage()


  return (
    <div>Detalhes do restaurante e todos os seus produtos, sendo possível fazer pedidos</div>
  )
}

export default DetailRestPage