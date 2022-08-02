import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtected";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "./../../constants/Url/url";
import {
  DivContainer,
  Img,
  ContainerLogo,
  DivDetalhe,
  H3,
  ContainerRest,
  DivCarousel,
} from "./style";
import {
  ChakraProvider,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Example.css";

function FeedPage() {
  const res = useRequestData([], `${BASE_URL}/restaurants`);
  const [search, setSearch] = useState("");
  useProtectedPage();
  const [filtredRestaurant, setFiltredRestaurant] = useState("");

  

  const cardRestaurant = res.restaurants
    ?.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase());
    })
    .filter((restaurant) => {
      return restaurant.category === filtredRestaurant || filtredRestaurant === ""

    })
    .map((restaurant) => {
      return (
        <ContainerRest key={restaurant.id}>
          <ContainerLogo>
            <Img src={restaurant.logoUrl} alt="logo" />
          </ContainerLogo>
          <H3>{restaurant.name} </H3>
          <DivDetalhe>
            <p>
              <strong>Entrega média em:</strong> {restaurant.deliveryTime} min
            </p>
            <p>Frete:R$ {restaurant.shipping},00</p>
          </DivDetalhe>
        </ContainerRest>
      );
    });

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    setFiltredRestaurant(e.target.innerText);
  };

  return (
    <ChakraProvider>
      <DivContainer>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="gray.300" />}
              marginTop="20px"
            />
            <Input
              htmlSize={32}
              marginTop="20px"
              type={"text"}
              onChange={onChangeSearch}
              value={search}
              placeholder={"Restaurante"}
            />
          </InputGroup>
        </Stack>

        <div className="carousel__container">
          <CarouselProvider
            naturalSlideWidth={110}
            naturalSlideHeight={40}
            totalSlides={8}
            visibleSlides={1}
            currentSlide={2}
          >
            <Slider onClick={(e) => handleClick(e)}>
              <Slide index={0}>Árabe</Slide>
              <Slide index={1}>Asiática</Slide>
              <Slide index={3}>Italiana</Slide>
              <Slide index={4}>Sorvetes</Slide>
              <Slide index={5}>Carnes</Slide>
              <Slide index={6}>Baiana</Slide>
              <Slide index={7}>Mexicana</Slide>
              <Slide index={2}>Hamburguer</Slide>
            </Slider>
          </CarouselProvider>
        </div>

        {cardRestaurant?.length !== 0 ? (
          cardRestaurant
        ) : (
          <p>Restaurante não encontrado!</p>
        )}
      </DivContainer>
    </ChakraProvider>
  );
}

export default FeedPage;
