import React from 'react'
import useProtectedPage from '../../hooks/useProtected'

function FeedPage() {

  useProtectedPage()


  return (



    <div>Página feed onde é possivel ver todos os restaurantes dispóniveis e buscar por tipo: arabe... !</div>
  )
}

export default FeedPage