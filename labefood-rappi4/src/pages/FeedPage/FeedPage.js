import React, { useEffect } from 'react'
import goToPage from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'


function FeedPage() {


  useEffect(() =>{

    VerificaEnde()


  },[])

  const Navigate = useNavigate()


  const VerificaEnde = () =>{
    
    if(localStorage.getItem('endereco')){

    }else{
      goToPage(Navigate, 'address')
    }


  }




  return (
    <div>Página feed onde é possivel ver todos os restaurantes dispóniveis e buscar por tipo: arabe... !</div>
  )
}

export default FeedPage