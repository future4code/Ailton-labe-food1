import styled from "styled-components";
import { primaryColor, secondColor } from "./../../constants/colors/colors";

export const DivContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContainerRest = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 14px;
  height: 13rem;
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
  color:#8E8E93;
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
