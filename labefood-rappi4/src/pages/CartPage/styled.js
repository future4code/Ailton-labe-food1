import styled from "styled-components";

export const Container = styled.div`
  min-height: 93vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 4rem;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const DivEndereco = styled.div`
  background-color: #eeeeee;
  width: 100vw;
  height: 12vh;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  gap: 5px;
`;
export const P = styled.p`
  width: 328px;
  height: 18px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-top: 1rem;
`;

export const PRed = styled.p`
  font-size: larger;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;

export const Texto = styled.p`
  font-size: larger;
  letter-spacing: -0.39px;
  margin-top: 1rem;
`;

export const Texto2 = styled.p`
  font-size: larger;
  letter-spacing: -0.39px;
  margin-right: 1rem;
`;

export const Texto3 = styled.p`
  font-size: larger;
  letter-spacing: -0.39px;
  margin-right: 1rem;
`;
export const Texto4 = styled.p`
  font-size: larger;
  letter-spacing: -0.39px;
  margin-left: 5px;
`;

export const DivTotal = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 1rem;
  gap: 5px;
  margin-top: 5px;
  font-size: 16px;
`;

export const Subtotal = styled.div`
  width: 100vw;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const Hr = styled.hr`
  width: 90%;
  border-bottom: solid 1px black;
  margin: 8px 0 12px 0;
`;

export const DivPagamento = styled.div`
  width: 100vw;
  display: flex;
  padding-left: 1rem;
  padding-top: 1rem;
  align-items: center;
`;

export const DivPagamento2 = styled.div`
  width: 100vw;
  display: flex;
  padding-left: 1rem;
  align-items: center;
`;

export const ButtonEntrar = styled.button`
  background-color: #e86e5a;
  height: 42px;
  width: 328px;
  border-radius: 4px;

  position: absolute;
  bottom: 2%;
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

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  border: 1px solid black;
  width: 100vw;
  min-height: 20vh;
`;
