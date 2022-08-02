import styled from 'styled-components'
import { primaryColor, secondColor } from './../../constants/colors/colors'

export const DivContainer = styled.div`
  min-height: 100vh;
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
  p {
    font-weight: bold;
  }
`

export const DivInput = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;

  input {
    margin-bottom: 5%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  align-items: center;
`

export const ButtonEntrar = styled.button`
  background-color: #e86e5a;
  height: 42px;
  width: 75%;
  border-radius: 4px;
`

export const DivCadastre = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4%;
`

export const DivCliqueAqui = styled.div`
  margin-left: 1%;
  font-weight: bold;
`
