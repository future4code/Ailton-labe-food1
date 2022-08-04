import styled from "styled-components";
import {primaryColor, secondColor} from './../../constants/colors/colors'

export const DivContainer = styled.div`

min-height: 100vh;
`

export const Form = styled.form`

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
width: 100vw;
align-items: center;

`

export const DivInput = styled.div`

  width: 75%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  
  input {
    color: black;
    margin-bottom: 5%;
    width: 100%;
  }
`

export const DivContainerImage = styled.div`


display: flex;
justify-content: center;
align-items: center;
padding: 6%;

`

export const DivText = styled.div`

display: flex;
justify-content: center;
padding-bottom: 5%;
p{
    font-weight: bold;
}


`

export const ButtonCadastrar = styled.button`

background-color: #e86e5a;
height: 42px;
width: 70%;
border-radius: 4px;
margin-left: 5%;
`


