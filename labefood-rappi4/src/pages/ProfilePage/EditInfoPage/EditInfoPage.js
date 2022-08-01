import React from 'react'
import useProtectedPage from '../../../hooks/useProtected'

function EditInfoPage() {


  useProtectedPage()

  return (


    <div>Possivel fazer alteracoes nas infos basicas do usuario, email, senha
    </div>


  )
}

export default EditInfoPage