import styled from "styled-components";

export const Footer = styled.div`
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 49px;
  background-color: #fff;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  display: flex;

  img {
    width: 30px;
    height: 32px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
  }
`;