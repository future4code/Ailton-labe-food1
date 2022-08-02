import React, { useState } from 'react'
import {DivContainerSplash} from './styled'
import logo from './../../assets/images/whitelogo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import goToPage from '../../routes/coordinator';


export default function SplashScreen() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 3000);
  const navigate = useNavigate()

  return redirectNow ? (
     goToPage(navigate, 'login')
  ) : (
    <DivContainerSplash><img src={logo} alt="logo"></img></DivContainerSplash>
  )
}
