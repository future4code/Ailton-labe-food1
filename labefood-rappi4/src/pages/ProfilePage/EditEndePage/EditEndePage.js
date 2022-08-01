import React from 'react'
import useProtectedPage from '../../../hooks/useProtected'

function EditEndePage() {

  useProtectedPage()


  return (


    <div>Editar o enderço cadastrado do usuário</div>
  )
}

export default EditEndePage