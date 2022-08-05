import styled from "styled-components";
import { primaryColor, secondColor } from "./../../constants/colors/colors";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContainerRest = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 14px;
  height: 13rem;

  /* margin-bottom: 14%; */
  margin-top: -3%;
`;

export const DivCarousel = styled.div`
  display: flex;
  gap: 1rem;
  width: 100vw;
  justify-content: center;
`;

export const DivDetalhe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  color: #8e8e93;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
`;

export const Img = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: 0 0 1rem 5rem;
  border-radius: 14px 14px 0px 0px;
`;
export const H3 = styled.h3`
  margin: 10px;
  color: #e86e5a;
`;

export const H1 = styled.h1`
  margin: 5px;
`;

export const ContainerLogo = styled.div`
  width: 328px;
  height: 120px;
`;

export const Input = styled.input`
  width: 328px;
  height: 35px;
  margin: 1rem;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
`;

export const ButtonOnActive = styled.button`
  &:active {
    color: ${(props) => {
      switch (props.color) {
        case "Árabe":
          return "#e86e5a";
        case "Asiática":
          return "#e86e5a";
        case "Baiana":
          return "#e86e5a";
        case "Carnes":
          return "#e86e5a";
        case "Hamburguer":
          return "#e86e5a";
        case "Italiana":
          return "#e86e5a";
        case "Mexicana":
          return "#e86e5a";
        case "Sorvetes":
          return "#e86e5a";
        default:
          return null;
      }
    }};
  }
  &:hover {
    color: ${(props) => {
      switch (props.color) {
        case "Árabe":
          return "#e86e5a";
        case "Asiática":
          return "#e86e5a";
        case "Baiana":
          return "#e86e5a";
        case "Carnes":
          return "#e86e5a";
        case "Hamburguer":
          return "#e86e5a";
        case "Italiana":
          return "#e86e5a";
        case "Mexicana":
          return "#e86e5a";
        case "Sorvetes":
          return "#e86e5a";
        default:
          return null;
      }
    }};
  }
`;


export const DivRestaurantesMapeados = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 16%;
`;

export const DivPedidoFinal = styled.div`
  position: fixed;
  bottom: 6%;
  width: 100%;
  height: 118px;
  background-color: #e86e5a;
  display: flex;
  column-gap: 5%;
  div {
    margin-top: 5%;
  }
  p {
    color: white;
  }

  #spinner {
    display: flex;
    color: white;
    justify-content: center;
  }
`;
export const ImageClock = styled.img`
  margin-left: 4vw;
  margin-top: 2vh;
`;

export const ContainerResetFilter = styled.div`
  position: absolute;
  height: 300px;
  width: 100%;
  background-color: red;
`;
