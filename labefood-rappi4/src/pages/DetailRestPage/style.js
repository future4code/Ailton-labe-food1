import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    #rest-logo {
      width: 90%;
      height: 120px;
      object-fit: cover;
      object-position: 0 0 1rem 5rem;
      border-radius: 14px 14px 0px 0px;
      border: solid 1px #b8b8b8;
    }
  }
`;

export const ContainerRestInfo = styled.div`
  width: 90%;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  #restaurant-name {
    color: #e86e5a;
    font-size: 16px;
  }

  #delivery-shipping {
    display: flex;
    gap: 2rem;
  }

  p {
    color: #b8b8b8;
    font-size: 16px;
  }
`;

export const ContainerMainFood = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 1rem;

  hr {
    width: 100%;
    border-bottom: solid 1px black;
    margin: 8px 0 12px 0;
  }
`;

export const ContainerMap = styled.div`
  display: flex;
  border: solid 1px #b8b8b8;
  height: 112px;
  position: relative;
  margin: 8px 0;
  align-items: center;
  border-radius: 8px;
  gap: 12px;

  img {
    min-width: 105px;
    max-width: 105px;
    min-height: 105px;
    max-height: 105px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  #quantity {
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    height: 33px;
    font-size: 16px;
    color: #e86e5a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 9px 16px;
    padding: 7px 12px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border: solid 1px #e86e5a;
  }

  #container-info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    #product-name {
      color: #e86e5a;
      font-size: 16px;
    }

    #product-description {
      color: #b8b8b8;
      font-size: 14px;
    }

    #product-price {
      color: black;
      font-size: 16px;
    }
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 31px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 1px #000;
    font-size: 13px;
    text-align: center;
    color: #000;
  }

  #button-remove {
    border: solid 1px #e86e5a;
    color: #e86e5a;
  }
`;

export const ContainerQuantity = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  #background-top {
    height: 225px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  #background-bottom {
    height: 223px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #container-select {
    width: 90%;
    height: 216px;
    background-color: white;
    position: relative;

    p {
      width: 296px;
      height: 18px;
      margin: 40px 0 0 16px;
      font-size: 16px;
      letter-spacing: -0.39px;
      text-align: center;
      color: #000;
    }

    #button-add-to-cart {
      bottom: 16px;
      right: 11px;
      border: none;
      width: 200px;
      letter-spacing: -0.39px;
      font-size: 16px;
      color: #4a90e2;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 296px;
  height: 56px;
  margin: 30px 16px 0;
  padding: 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    width: 100%;
    height: 5vh;

    select {
      width: 100%;
      font-size: 18px;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 100%;
`;

