import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../../constants/colors/colors";
import goToPage from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useGetProfile from "../../hooks/useGetProfile";
import useGetProfileDetails from "../../hooks/useGetProfileDetails";
import useProtectedPage from "../../hooks/useProtected";
import { BsPencil } from "react-icons/bs";
import { Button, Icon, InputRightElement } from "@chakra-ui/react";
import NavegationFeed from "../../components/Footer/navegationFeed"
import useGetOrdersHistory from "../../hooks/useGetOrdersHistory";


const Divhistory = styled.div`

display: flex;
gap: 1rem;
flex-direction: column;
justify-content: center;
padding-bottom: 16%;


`

const DivEdicao = styled.div`
  position: absolute;
  top: 3px;
  right: 20px;
`;
const Container = styled.div`
  min-height: 100%;
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

      #container-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;
        p {
          margin: 0;
        }
      }

      button {
        position: absolute;
        top: 0;
        right: 4%;
      }
    }

    #container-adress {
      background-color: #eeeeee;
      height: 10vh;
      margin: 11px 0;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        height: 25px;
      }

      #adress-title {
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
  useProtectedPage();
  const arrayTest = [
    {
      name: "Bullguer Vila Madalena",
      date: "23 outubro 2019",
      price: 67,
    },
  ];
  
  const profile = useGetProfile();
  const history = useGetOrdersHistory();

  
  const orderHistory = history?.orders?.map((order) => {
    let date = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(order.createdAt)

    return(
      <ContainerMap key={order.createdAt}>
      <p id="order-name">{order.restaurantName}</p>
      <p id="order-date">{date}</p>
      <p id="order-price">
        <strong>SUBTOTAL R$</strong>
        {order.totalPrice},00
      </p>
    </ContainerMap>


    )
  })


 

  
  return (
    <Container>
      <header>
        <p>
          <b>Meu Perfil</b>
        </p>
      </header>
      <main>
        <section id="info-profile">
          {profile.name && profile.email ? (
            <div id="container-info">
              <p>{profile.name}</p>
              <p>{profile.email}</p>
              <p>{profile.cpf}</p>
            </div>
          ) : (
            <p>carregando..</p>
          )}
          <DivEdicao onClick={() => goToPage(navigate, "edit/inf")}>
            <div>
              <Icon as={BsPencil} />
            </div>
          </DivEdicao>
        </section>
        <section id="container-adress">
          <div>
            <p id="adress-title">Endereço cadastrado</p>
            <p id="adress-itself">{profile.address}</p>
          </div>
          <div onClick={() => goToPage(navigate, "edit/end")}>
            <div>
              <Icon as={BsPencil} />
            </div>
          </div>
        </section>
        <section id="order-history">
          <p>
            <b>Histórico de pedidos</b>
          </p>
          <hr />
          <Divhistory>
          {orderHistory}
          </Divhistory>
        </section>
      </main>
      <NavegationFeed page={'profile'}/>
    </Container>
  );
}

export default ProfilePage;
