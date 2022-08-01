import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../../../constants/Url/url";
import useGetProfile from "../../../hooks/useGetProfile";
import { useForm } from "../../../hooks/useForm";
import goToPage from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Container } from "./style"


function EditInfoPage() {
  const token = localStorage.getItem("token");

  const profile = useGetProfile();
  const navigate = useNavigate();

  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const updateProfile = (e) => {
    e.preventDefault();

    axios
      .put(`${BASE_URL}/profile`, form, {
        headers: {
          auth: token,  
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <Container>
      <header>
        <div id="header">
          <button onClick={() => goToPage(navigate, "profile")}>Voltar</button>
          <p>Editar</p>
        </div>
        <hr />
      </header>
      <main>
        <form id="forms">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={profile.name}
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={profile.email}
          />
          <input
            name="cpf"
            value={form.cpf}
            onChange={onChange}
            placeholder={profile.cpf}
          />
          <button onClick={() => updateProfile}>Salvar</button>
        </form>
      </main>
    </Container>
  );
}

export default EditInfoPage;
