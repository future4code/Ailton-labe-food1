import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  #header {
    display: flex;
    align-items: center;
    height: 6vh;

    p {
      margin: 0;
    }

    button {
      border: none;
      background: none;
      margin-right: 32%;
      height: 100%;
      font-size: 14px;
    }
  }

  main {
    #forms {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      margin-left: 10px;
      margin-top: 30px;
    }
    input {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      width: 90%;
      color: black;
    }
    button {
      background-color: #e86e5a;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: #000000;
      height: 42px;
      margin-left: 10px;
      margin-top: 5px;
      
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
