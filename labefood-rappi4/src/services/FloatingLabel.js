import styled from "styled-components";

export const LabelFloat = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 20px 10px;
  border: none;

  label {
    position: absolute;
    background-color: white;
    top: -6px;
    left: 15px;
    color: #b8b8b8;
    font-size: 12px;
    width: 80px;
    padding-left: 5px;
  }

  input {
    border: 0;
    padding-left: 15px;
    outline: none;
    height: 50px;
    width: 100%;
    font-size: 18px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    color: #d0d0d0;
  }
`;