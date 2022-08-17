import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const DivTittle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
  p {
    font-weight: bold;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 70vw;
  justify-content: center;
  align-items: center;

  input{
    color:black;
  }

`
export const ButtonSave = styled.button`
  background-color: #e86e5a;
  height: 42px;
  width: 70vw;
  border-radius: 4px;
  font-weight: bold;
`
