import React, { useState } from 'react'
import goToPage from '../../routes/coordinator'
import { useForm } from './../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import {
  Form,
  DivContainer,
  DivContainerImage,
  DivText,
  DivInput,
  ButtonCadastrar
} from './style'
import { signup } from './../../services/user'
import logo from './../../assets/images/logo.svg'
import Header from '../../components/Header/Login-Signup/header'
import {
  ChakraProvider,
  Stack,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  extendTheme,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button
} from '@chakra-ui/react'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { BsFillEyeFill } from 'react-icons/bs'
import {LabelFloat} from './../../services/FloatingLabel'

function SignupPage() {
  const Navigate = useNavigate()

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [ocultar, setOcultar] = useState(false)
  const ocultarMostrar = () => setOcultar(!ocultar)

  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, cleanFields] = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
    passVerify: ''
  })

  const onSubmitForm = (e) => {
    e.preventDefault()

    const passVerify = form.passVerify

    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password
    }

    signup(body, cleanFields, Navigate, setIsLoading, passVerify)
  }

  return (
    <ChakraProvider>
      <DivContainer>
        <div>
          <Header page="login" />
        </div>

        <DivContainerImage>
          <img src={logo} alt="logo"></img>
        </DivContainerImage>
        <DivText>
          <p>Cadastrar</p>
        </DivText>

        <div>
          <Form onSubmit={onSubmitForm}>
            <DivInput>
              <LabelFloat>
              <input
                placeholder="Nome e sobrenome"
                value={form.name}
                type={'text'}
                name="name"
                required
                onChange={onChange}
              ></input>
              <label>Nome*</label>
            </LabelFloat>

            <LabelFloat>
              <input
              pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'}
                placeholder="email@email.com"
                value={form.email}
                type="email"
                name="email"
                required
                onChange={onChange}
              ></input>
              <label>E-mail*</label>
            </LabelFloat>

              <LabelFloat>
              <input
                pattern={'[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}'}
                maxLength={'11'}
                placeholder="000.000.000-00"
                value={form.cpf}
                type="number"
                name="cpf"
                required
                onChange={onChange}
              ></input>
              <label>CPF*</label>
              </LabelFloat>


              <InputGroup w={'300px'}>
                <LabelFloat>
                <input
                  placeholder="Mínimo 6 caracteres"
                  minLength={'6'}
                  value={form.password}
                  name="password"
                  type={show ? 'text' : 'password'}
                  required
                  onChange={onChange}
                ></input>
                <label>Senha*</label>
                </LabelFloat>

                <InputRightElement marginBlock={4}
                marginRight={2}>
                  <div onClick={handleClick}>
                    {show ? (
                      <div>
                        <Icon as={BsFillEyeSlashFill} />
                      </div>
                    ) : (
                      <div>
                        <Icon as={BsFillEyeFill} />
                      </div>
                    )}
                  </div>
                </InputRightElement>
              </InputGroup>

              <InputGroup w={'300px'}>
                <LabelFloat>
                <input
                  placeholder="Digite novamente."
                  minLength={'6'}
                  value={form.passVerify}
                  name="passVerify"
                  type={ocultar ? 'text' : 'password'}
                  required
                  onChange={onChange}
                ></input>
                <label>Confirmar*</label>
                </LabelFloat>
                <InputRightElement
                marginBlock={4}
                marginRight={2}>
                  <div onClick={ocultarMostrar}>
                    {ocultar ? (
                      <div>
                        <Icon as={BsFillEyeSlashFill} />
                      </div>
                    ) : (
                      <div>
                        <Icon as={BsFillEyeFill} />
                      </div>
                    )}
                  </div>
                </InputRightElement>
              </InputGroup>
            </DivInput>
            <ButtonCadastrar type="submit"><strong>Criar</strong></ButtonCadastrar>
          </Form>

          {/* <div>Já possui uma conta ? Faça <strong onClick={() =>goToPage(Navigate, 'login')}>login</strong></div> */}
        </div>
      </DivContainer>
    </ChakraProvider>
  )
}

export default SignupPage
