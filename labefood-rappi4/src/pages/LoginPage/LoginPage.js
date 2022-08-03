import React, { useState } from "react";
import { useForm } from "./../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import goToPage from "./../../routes/coordinator";
import {
  Form,
  DivContainer,
  ButtonEntrar,
  DivContainerImage,
  DivText,
  DivInput,
  DivCadastre,
  DivCliqueAqui,
  InputLogin,
} from "./styled";
import { login } from "./../../services/user";
import logo from "./../../assets/images/logo.svg";
import {
  ChakraProvider,
  Icon,
  Stack,
  Input,
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
import { LabelFloat } from "../../services/FloatingLabel";

function LoginPage() {
  const Navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, cleanFields, Navigate, setIsLoading);
  };

  return (
    <ChakraProvider>
      <DivContainer>
        <DivContainerImage>
          <img src={logo} alt="logo"></img>
        </DivContainerImage>
        <DivText>
          <p>Entrar</p>
        </DivText>

        <div>
          <Form onSubmit={onSubmitForm}>
            <DivInput>
              <LabelFloat>
                <input
                 pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'}
                  placeholder="email@email.com"
                  value={form.email}
                  type={"email"}
                  name="email"
                  required
                  onChange={onChange}
                ></input>
                <label>E-mail*</label>
              </LabelFloat>

              <InputGroup>
                <LabelFloat>
                    <input
                    placeholder="Mínimo de 6 caracteres"
                    minLength={'6'}
                    value={form.password}
                    name="password"
                    type={show ? "text" : "password"}
                    required
                    onChange={onChange}
                  ></input>
                    <label>Senha*</label>
                  <InputRightElement marginBlock={2}>
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
                </LabelFloat>
              </InputGroup>
            </DivInput>

            <ButtonEntrar type="submit">
              <strong>Entrar</strong>
            </ButtonEntrar>
          </Form>
          <DivCadastre>
            <strong>Não possui cadastro?</strong>
            <DivCliqueAqui onClick={() => goToPage(Navigate, "signup")}>
              Clique aqui.{" "}
            </DivCliqueAqui>
          </DivCadastre>
        </div>
      </DivContainer>
    </ChakraProvider>
  );
}

export default LoginPage;
