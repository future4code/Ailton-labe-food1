import styled from "styled-components";
import {primaryColor} from "../../constants/colors/colors"

export const Divhistory = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 16%;
`;

export const DivEdicao = styled.div`
  position: absolute;
  top: 3px;
  right: 20px;
`;
export const Container = styled.div`
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

export const ContainerMap = styled.div`
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

export const LoadingInfo = styled.div`
  height: 77px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingHistory = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: center;
`;
