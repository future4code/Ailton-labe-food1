import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { address } from '../../services/user'
import { Form, DivContainer } from './styled'
import goToPage from '../../routes/coordinator'

function AddressRegistrationFormPage() {
  const Navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clean] = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    address(form, clean, Navigate, setIsLoading)
  }

  //   const userEffect = () => {
  //     checkAddress()
  //   }

  //   //   const checkAddress = () => {
  //   //     if (localStorage.getItem('token')) {
  //   //     } else {
  //   //       goToPage(Navigate, '')
  //   //     }
  //   //   }

  return (
    <DivContainer>
      <div>Meu Endereço</div>

      <div>
        <Form onSubmit={onSubmit}>
          <input
            placeholder="Logradouro"
            value={form.street}
            type={'text'}
            name="street"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Número"
            value={form.number}
            type="number"
            name="number"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Complemento"
            value={form.complement}
            type="text"
            name="complement"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Bairro"
            value={form.neighbourhood}
            type="text"
            name="neighbourhood"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Cidade"
            value={form.city}
            type="text"
            name="city"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Estado"
            value={form.state}
            type="text"
            name="state"
            required
            onChange={onChange}
          ></input>

          <button type="submit">Salvar Endereço</button>

        </Form>
      </div>
    </DivContainer>
  )
}

export default AddressRegistrationFormPage
