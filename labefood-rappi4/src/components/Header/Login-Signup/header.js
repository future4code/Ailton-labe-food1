import React from 'react'
import { DivContainerHeader, ImageBack, TextAling, DivCentralize } from './style'
import { ChakraProvider } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'
import back from './../../../assets/images/back.svg'
import { useNavigate } from 'react-router-dom'
import goToPage from '../../../routes/coordinator'

function Header(props) {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <DivContainerHeader>

        <DivCentralize>
          <ImageBack
            src={back}
            onClick={() => goToPage(navigate, `${props.page}`)}
          ></ImageBack>
          <TextAling>{props.title}</TextAling>
        </DivCentralize>

        <hr></hr>
      </DivContainerHeader>
    </ChakraProvider>
  )
}

export default Header
