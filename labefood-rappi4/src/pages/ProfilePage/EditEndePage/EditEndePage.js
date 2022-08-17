import React from "react";
import useGetProfileDetails from "../../../hooks/useGetProfileDetails";
import { useForm } from "../../../hooks/useForm";
import { Container } from "./style";
import { address } from "../../../services/user";
import useProtectedPage from "../../../hooks/useProtected";
import Header from "../../../components/Header/Login-Signup/header";
import { LabelFloat } from "../../../services/FloatingLabel";
import useProtectedAdress from "../../../hooks/useProtectedAdress";

function EditEndePage() {
  const profileDetails = useGetProfileDetails();
  useProtectedPage();
  useProtectedAdress()

  const [form, onChange, cleanFields] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmit = () => {
    address(form, cleanFields);
  };

  return (
    <Container>
      <Header page="profile" title="Endereço" />
      <main>
        <form id="forms">
          <LabelFloat>
            <input
              minLength={"5"}
              type="text"
              name="street"
              value={form.street}
              onChange={onChange}
              placeholder={profileDetails.street}
              required
            />
            <label>Rua*</label>
          </LabelFloat>
          <LabelFloat>
            <input
              type="number"
              name="number"
              value={form.number}
              onChange={onChange}
              placeholder={profileDetails.number}
              required
            />
            <label>Número*</label>
          </LabelFloat>
          <LabelFloat>
            <input
              name="complement"
              value={form.complement}
              onChange={onChange}
              placeholder="Apto./Bloco"
            ></input>
            <label>Complemento</label>
          </LabelFloat>
          <LabelFloat>
            <input
              minLength={"3"}
              name="neighbourhood"
              value={form.neighbourhood}
              onChange={onChange}
              placeholder={profileDetails.neighbourhood}
              required
            />
            <label>Bairro*</label>
          </LabelFloat>
          <LabelFloat>
            <input
              minLength={"2"}
              name="city"
              value={form.city}
              onChange={onChange}
              placeholder={profileDetails.city}
              required
            />
            <label>Cidade*</label>
          </LabelFloat>
          <LabelFloat>
            <input
              minLength={"2"}
              name="state"
              value={form.state}
              onChange={onChange}
              placeholder={profileDetails.state}
              required
            />
            <label>Estado*</label>
          </LabelFloat> 
          <button onClick={() => onSubmit()}>
            <strong>Salvar</strong>
          </button>
        </form>
      </main>
    </Container>
  );
}

export default EditEndePage;
