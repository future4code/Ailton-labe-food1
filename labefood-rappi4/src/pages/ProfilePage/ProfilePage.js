import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../constants/Url/url";
import { primaryColor } from "../../constants/colors/colors";
import goToPage from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useGetProfile from "../../hooks/useGetProfile";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    border-bottom: 1px solid grey;
    margin-bottom: 2px;

    p {
      margin: 0;
    }
  }

  main {
    #info-profile {
      padding: 0 16px;
      position: relative;

      button {
        position: absolute;
        top: 0;
        right: 4%;
      }
    }

    #container-adress {
      background-color: #eeeeee;
      height: 10vh;
      margin: 16px 0;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        height: 25px;
      }

      #adress-title {
        height: 18px;
        margin: 0 0 8px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #b8b8b8;
      }

      #adress-itself {
        height: 18px;
        margin: 8px 0 0;
        font-family: "Roboto";
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
      }
    }

    #order-history {
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 10px;

      p {
        margin: 0;
      }

      hr {
        width: 90%;
        padding: 0 16px;
      }
    }
  }
`;

const ContainerMap = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  height: 80px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  #order-name {
    color: ${primaryColor};
    font-size: 16px;
  }

  #order-date {
    font-size: 12px;
    color: black;
  }

  #order-price {
    font-size: 16px;
    font-weight: bold;
  }
`;

function ProfilePage() {

  const navigate = useNavigate();
  const arrayTest = [
    {
      name: "Bullguer Vila Madalena",
      date: "23 outubro 2019",
      price: 67,
    },
  ];

  const profile = useGetProfile();

  return (
    <Container>
      <header>
        <p>Meu Perfil</p>
      </header>
      <main>
        <section id="info-profile">
          {profile.name && profile.email ? (
            <div>
              <p>{profile.name}</p>
              <p>{profile.email}</p>
              <p>{profile.cpf}</p>
            </div>
          ) : (
            <p>carregando..</p>
          )}
          <button onClick={() => goToPage(navigate, "edit/inf")}>ab</button>
        </section>
        <section id="container-adress">
          <div>
            <p id="adress-title">Endereço cadastrado</p>
            <p id="adress-itself">{profile.address}</p>
          </div>
          <button onClick={() => goToPage(navigate, "edit/end")}>cd</button>
        </section>
        <section id="order-history">
          <p>Histórico de pedidos</p>
          <hr />
          {arrayTest.map((obj) => {
            return (
              <ContainerMap key={obj.name}>
                <p id="order-name">{obj.name}</p>
                <p id="order-date">{obj.date}</p>
                <p id="order-price">
                  <strong>SUBTOTAL R$</strong>
                  {obj.price},00
                </p>
              </ContainerMap>
            );
          })}
        </section>
      </main>
    </Container>
  );
}

export default ProfilePage;
