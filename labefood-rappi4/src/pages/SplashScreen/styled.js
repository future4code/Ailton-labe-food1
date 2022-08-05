import styled from "styled-components";

export const DivContainerSplash = styled.div`
  min-height: 100vh;
  background-color: #e86e5a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: static;
  -webkit-animation: fadeOut 5s;
  animation: fadeOut 5s;
  animation-fill-mode: forwards;

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 0.01;
      width: 100%;
      height: 100%;
    }
    100% {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 0.01;
      width: 100%;
      height: 100%;
    }
    100% {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
`;
