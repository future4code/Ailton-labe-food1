import React, { useState } from 'react'
import goToPage from '../../routes/coordinator'
import { useForm } from './../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { Form, DivContainer } from './style'
import { signup } from './../../services/user'

function SignupPage() {
  const Navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, cleanFields] = useForm({
    name: '',
    email: '',
    cpf: '',
    password: ''
  })

  const onSubmitForm = (e) => {
    e.preventDefault()
    signup(form, cleanFields, Navigate, setIsLoading)
  }

  return (
    <DivContainer>
      <div>Página de cadastro dos usuários !</div>

      <div>
        <Form onSubmit={onSubmitForm}>
          <input
            placeholder="Name"
            value={form.name}
            type={'text'}
            name="name"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Email"
            value={form.email}
            type="email"
            name="email"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Cpf"
            value={form.cpf}
            type="number"
            name="cpf"
            required
            onChange={onChange}
          ></input>

          <input
            placeholder="Senha"
            value={form.password}
            type="password"
            name="password"
            required
            onChange={onChange}
          ></input>

          <button type="submit">Cadastrar</button>
        </Form>
        <div>
          Já possui uma conta ? Faça{' '}
          <strong onClick={() => goToPage(Navigate, 'login')}>login</strong>
        </div>
      </div>
    </DivContainer>
  )
}

export default SignupPage
