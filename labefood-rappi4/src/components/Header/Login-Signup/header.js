import React from 'react'
import { DivContainerHeader, ImageBack } from './style'
import { ChakraProvider } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'
import back from './../../../assets/images/back.svg'
import { useNavigate } from 'react-router-dom'
import goToPage from '../../../routes/coordinator'

function Header(props) {
  const Navigate = useNavigate()

  return (
    <ChakraProvider>
      <DivContainerHeader>
        <div>
          <ImageBack src={back} onClick={() => goToPage(Navigate, `${props.page}`)}></ImageBack>
          <p>{props.title}</p>
        </div>
        <hr></hr>
      </DivContainerHeader>
    </ChakraProvider>
  )
}

export default Header
