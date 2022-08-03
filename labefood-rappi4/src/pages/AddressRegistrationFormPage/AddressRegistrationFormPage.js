import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { address } from "../../services/user";
import { Form, DivContainer } from "./styled";
import goToPage from "../../routes/coordinator";
import { LabelFloat } from "../../services/FloatingLabel";
import { ButtonSave, DivTittle } from "./styled";
import Header from "../../components/Header/Login-Signup/header";

function AddressRegistrationFormPage() {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, onChange, clean] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    address(form, clean, Navigate, setIsLoading);
  };


  return (
    <DivContainer>
      <div>
        <Header page="signup" />
        {/* Lembrar de avisar que foi feito uma props */}
      </div>
      <DivTittle>
        <p>Meu Endereço</p>
      </DivTittle>

      <div>
        <Form onSubmit={onSubmit}>
          <LabelFloat>
            <input
              placeholder="Rua/Av."
              value={form.street}
              type={"text"}
              name="street"
              required
              onChange={onChange}
            ></input>
            <label>Logradouro*</label>
          </LabelFloat>

          <LabelFloat>
            <input
              placeholder="Número"
              value={form.number}
              type="number"
              name="number"
              required
              onChange={onChange}
            ></input>
            <label>Número*</label>
          </LabelFloat>

          <LabelFloat>
            <input
              placeholder="Complemento"
              value={form.complement}
              type="text"
              name="complement"
              onChange={onChange}
            ></input>
            <label>Apto./ Bloco</label>
          </LabelFloat>

          <LabelFloat>
            <input
              placeholder="Bairro"
              value={form.neighbourhood}
              type="text"
              name="neighbourhood"
              required
              onChange={onChange}
            ></input>
            <label>Bairro*</label>
          </LabelFloat>

          <LabelFloat>
            <input
              placeholder="Cidade"
              value={form.city}
              type="text"
              name="city"
              required
              onChange={onChange}
            ></input>
            <label>Cidade*</label>
          </LabelFloat>

          <LabelFloat>
            <input
              placeholder="Estado"
              value={form.state}
              type="text"
              name="state"
              required
              onChange={onChange}
            ></input>
            <label>Estado*</label>
          </LabelFloat>
          <div>
            <ButtonSave type="submit">Salvar</ButtonSave>
          </div>
        </Form>
      </div>
    </DivContainer>
  );
}

export default AddressRegistrationFormPage;
