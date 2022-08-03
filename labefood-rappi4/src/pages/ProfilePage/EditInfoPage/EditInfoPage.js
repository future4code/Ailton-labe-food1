import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../../../constants/Url/url";
import useGetProfile from "../../../hooks/useGetProfile";
import { useForm } from "../../../hooks/useForm";
import goToPage from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtected";
import { Container } from "./style";
import { MdArrowBackIos } from "react-icons/md";
import { Icon } from "@chakra-ui/react";
import Header from "../../../components/Header/Login-Signup/header";
import { LabelFloat } from "../../../services/FloatingLabel";

function EditInfoPage() {
  const token = localStorage.getItem("token");

  const profile = useGetProfile();
  const navigate = useNavigate();
  useProtectedPage();

  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const updateProfile = () => {
    axios
      .put(`${BASE_URL}/profile`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <Container>
      <Header page="profile" title="Editar" />
      {/* <header>
        <div id="header">
          <div onClick={() => goToPage(navigate, "profile")}>
            <Icon as={MdArrowBackIos}/>
            </div>
          <p><b>Editar</b></p>
        </div>
        <hr />
      </header> */}
      <main>
        <form id="forms">
          <LabelFloat>
            <input
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
              name="cpf"
              value={form.cpf}
              onChange={onChange}
              placeholder={profile.cpf}
              required
              />
              <label>CPF*</label>
              </LabelFloat>
          <button onClick={() => updateProfile()}><strong>Salvar</strong></button>
        </form>
      </main>
    </Container>
  );
}

export default EditInfoPage;
