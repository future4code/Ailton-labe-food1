import React, { useState } from "react";
import { useForm } from "./../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import goToPage from "./../../routes/coordinator";
import { Form, DivContainer } from "./style";
import { login } from "./../../services/user";

function LoginPage() {
  const Navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, cleanFields, Navigate, setIsLoading);
  };

  return (
    <DivContainer>
      <div>Página de login dos usuários cadastrados !</div>

      <div>
        <Form onSubmit={onSubmitForm}>
          <input
            placeholder="email"
            value={form.email}
            type={"email"}
            name="email"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="senha"
            value={form.password}
            type="password"
            name="password"
            required
            onChange={onChange}
          ></input>

          <button type="submit">Entrar</button>
        </Form>
        <div>
          Não possui uma conta ?{" "}
          <strong onClick={() => goToPage(Navigate, "signup")}>
            cadastre-se
          </strong>
        </div>
      </div>
    </DivContainer>
  );
}

export default LoginPage;
