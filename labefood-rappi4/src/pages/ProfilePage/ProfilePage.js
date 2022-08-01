import React from 'react'
import useProtectedPage from '../../hooks/useProtected'

function ProfilePage() {


  useProtectedPage()
  
  return (



    <div>Página do perfil do usuário logado, onde é possivel cadastrar um endereço, ver o histórico de pedidos e ver suas informações de contato
        também é possivel fazer alterações em todas essas informações
    </div>

  )
}

export default ProfilePage