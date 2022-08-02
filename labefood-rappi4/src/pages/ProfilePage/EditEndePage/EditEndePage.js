import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useGetProfile from "../../../hooks/useGetProfile";
import { useForm } from "../../../hooks/useForm";
import goToPage from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

function EditEndePage() {

  // const profile = useGetProfile();
  const navigate = useNavigate();

  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  // PEGAR FUNÇÃO DE ADD ADRESS

  return (
    <Container>
      <header>
        <div id="header">
          <button onClick={() => goToPage(navigate, "profile")}>Voltar</button>
          <p>Endereço</p>
        </div>
        <hr />
      </header>
      <main>
        <form id="forms">
          <input
            name="street"
            value={form.street}
            onChange={onChange}
            // placeholder={profile.street}
          />
          <input
            type="number"
            name="number"
            value={form.number}
            onChange={onChange}
            // placeholder={profile.number}
          />
          <input
            name="complement"
            value={form.complement}
            onChange={onChange}
            placeholder="Apto./Bloco"
          />
          <input
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
            // placeholder={profile.neighbourhood}
          />
          <input
            name="city"
            value={form.city}
            onChange={onChange}
            // placeholder={profile.city}
          />
          <input
            name="state"
            value={form.state}
            onChange={onChange}
            // placeholder={profile.state}
          />
          <button>Salvar</button>
          {/* ADICIONAR FUNÇÃO DE ADD ADRESS NO ONCLICK*/}
        </form>
      </main>
    </Container>
  );

}

export default EditEndePage;
