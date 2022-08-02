import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  #header {
    display: flex;
    align-items: center;
    justify-content: center;
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
      align-items: center;
      gap: 15px;
    }
  }
`;