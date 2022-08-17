import styled from "styled-components";

export const DivContainerSplash = styled.div`
  min-height: 100vh;
  background-color: #e86e5a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    animation-name: example;
    animation-duration: 3.5s;
    position: relative;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;

    @keyframes example {
      0% {
        top: 0px;
        scale: 1;
      }
      25% {
        top: 0px;
        scale: 1.6;
      }
      100% {
        top: -240px;
        scale: 1;
      }
    }
  }
`;
