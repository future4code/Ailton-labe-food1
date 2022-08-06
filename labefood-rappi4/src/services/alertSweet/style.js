import styled from "styled-components";

export const ContainerAlertSweet = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  .swal-button {
    padding: 7px 19px;
    border-radius: 2px;
    background-color: red;
    font-size: 12px;
    border: 1px solid #3e549a;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #e86e5a;
  }

  p {
    font-size: 18px;
  }
`;