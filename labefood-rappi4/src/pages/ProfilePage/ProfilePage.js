import React from "react";
import styled from "styled-components";
import goToPage from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useGetProfile from "../../hooks/useGetProfile";
import useProtectedPage from "../../hooks/useProtected";
import { BsPencil } from "react-icons/bs";
import { Icon, Spinner } from "@chakra-ui/react";
import NavegationFeed from "../../components/Footer/navegationFeed";
import useGetOrdersHistory from "../../hooks/useGetOrdersHistory";
import { Divhistory, DivEdicao, Container, ContainerMap, LoadingInfo, LoadingHistory } from "./style";

function ProfilePage() {
  const navigate = useNavigate();
  useProtectedPage();

  const profile = useGetProfile();
  const [ history, isLoading ] = useGetOrdersHistory();

  const orderHistory = history?.orders?.map((order) => {
    let date = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(order.createdAt);

    return (
      <ContainerMap key={order.createdAt}>
        <p id="order-name">{order.restaurantName}</p>
        <p id="order-date">{date}</p>
        <p id="order-price">
          <strong>SUBTOTAL R$</strong>
          {order.totalPrice},00
        </p>
      </ContainerMap>
    );
  });

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
            <LoadingInfo>
              <Spinner width='10px' height='10px'/>
            </LoadingInfo>
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
          {isLoading ? (
            <LoadingHistory>
              <Spinner width='20px' height='20px'/>
            </LoadingHistory>
          ) : (
            <Divhistory>{orderHistory}</Divhistory>
          )}
        </section>
      </main>
      <NavegationFeed page={"profile"} />
    </Container>
  );
}

export default ProfilePage;
