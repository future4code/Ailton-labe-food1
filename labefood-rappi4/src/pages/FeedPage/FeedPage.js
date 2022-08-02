import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtected";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "./../../constants/Url/url";
import {
  DivContainer,
  Img,
  ContainerLogo,
  Input,
  DivDetalhe,
  H3,
  ContainerRest,
} from "./style";

function FeedPage() {
  const res = useRequestData([], `${BASE_URL}/restaurants`);
  const [search, setSearch] = useState("");
  useProtectedPage()


  const cardRestaurant = res.restaurants?.filter((restaurant) => {
    return restaurant.name
    .toLowerCase()
    .includes(search.toLowerCase())
 }).map((restaurant) => {
   return (
     <ContainerRest key={restaurant.id}>
       <ContainerLogo>
         <Img src={restaurant.logoUrl} alt="logo" />
       </ContainerLogo>
       <H3>{restaurant.name} </H3>
       <DivDetalhe>
         <p>
           <strong>Entrega estimada em:</strong> {restaurant.deliveryTime} min
         </p>
         <p>Frete:R$ {restaurant.shipping},00</p>
       </DivDetalhe>
     </ContainerRest>
   );
 })

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <DivContainer>
      <Input
        type={"text"}
        onChange={onChangeSearch}
        value={search}
        placeholder={"Restaurante"}
      ></Input>
      {cardRestaurant}
    </DivContainer>
  );

}

export default FeedPage;
