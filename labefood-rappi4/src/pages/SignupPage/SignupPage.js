import React, { useState } from "react";
import goToPage from "../../routes/coordinator";
import { useForm } from "./../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {
  Form,
  DivContainer,
  DivContainerImage,
  DivText,
  DivInput,
  ButtonCadastrar,
} from "./style";
import { signup } from "./../../services/user";
import logo from "./../../assets/images/logo.svg";
import Header from "../../components/Header/Login-Signup/header";
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
  Button,
} from "@chakra-ui/react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

function SignupPage() {
  const Navigate = useNavigate();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [ocultar, setOcultar] = useState(false);
  const ocultarMostrar = () => setOcultar(!ocultar);

  const [isLoading, setIsLoading] = useState(false);
  const [form, onChange, cleanFields] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    passVerify: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();

    const passVerify = form.passVerify;

    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
    };

    signup(body, cleanFields, Navigate, setIsLoading, passVerify);
  };

  return (
    <ChakraProvider>
      <DivContainer>
        <div>
          <Header />
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
              <Input
                placeholder="Nome e sobrenome"
                value={form.name}
                type={"text"}
                name="name"
                required
                onChange={onChange}
              ></Input>

              <Input
                placeholder="email@email.com"
                value={form.email}
                type="email"
                name="email"
                required
                onChange={onChange}
              ></Input>


              <Input
                placeholder="000.000.000-00"
                value={form.cpf}
                type="number"
                name="cpf"
                required
                onChange={onChange}
              ></Input>

              <InputGroup size="md">
                <Input
                  placeholder="Mínimo 6 caracteres"
                  value={form.password}
                  name="password"
                  type={show ? "text" : "password"}
                  required
                  onChange={onChange}
                />
                <InputRightElement width="4.5rem">
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

              <InputGroup size="md">
                <Input
                  placeholder="Digite novamente."
                  value={form.passVerify}
                  name="passVerify"
                  type={ocultar ? "text" : "password"}
                  required
                  onChange={onChange}
                />
                <InputRightElement width="4.5rem">
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
            <ButtonCadastrar type="submit">Criar</ButtonCadastrar>
          </Form>

          {/* <div>Já possui uma conta ? Faça <strong onClick={() =>goToPage(Navigate, 'login')}>login</strong></div> */}
        </div>
      </DivContainer>
    </ChakraProvider>
  );
}

export default SignupPage;

