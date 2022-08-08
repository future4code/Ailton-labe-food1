import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/Url/url";
import useGetProfile from "../../../hooks/useGetProfile";
import { useForm } from "../../../hooks/useForm";
import useProtectedPage from "../../../hooks/useProtected";
import { Container } from "./style";
import Header from "../../../components/Header/Login-Signup/header";
import { LabelFloat } from "../../../services/FloatingLabel";
import useProtectedAdress from "../../../hooks/useProtectedAdress";

function EditInfoPage() {
  const token = localStorage.getItem("token");

  const profile = useGetProfile();
  useProtectedPage();
  useProtectedAdress()

  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const updateProfile = () => {
    axios
      .put(`${BASE_URL}/profile/`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
      })
      .catch((err) => {
      });
  };

  return (
    <Container>
      <Header page="profile" title="Editar" />
      <main>
        <form id="forms">
          <LabelFloat>
            <input
              minLength={"3"}
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder={profile.name}
              required
            />
            <label>Nome *</label>
          </LabelFloat>
          <LabelFloat>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder={profile.email}
              required
            />
            <label>E-mail*</label>
          </LabelFloat>
          <LabelFloat>
            <input
              pattern={'[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}'}
              maxLength={"11"}
              name="cpf"
              value={form.cpf}
              onChange={onChange}
              placeholder={profile.cpf}
              required
              title={'Este número precisa ter 11 caracteres.'}
            />
            <label>CPF*</label>
          </LabelFloat>
          <button onClick={() => updateProfile()}>
            <strong>Salvar</strong>
          </button>
        </form>
      </main>
    </Container>
  );
}

export default EditInfoPage;
