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
=======
    name: '', email:'', cpf:'', password:'', confirmPass:''
   }) 

   const body = {
     name: form.name,
     email: form.email,
     cpf: form.cpf,
     password: form.password
   }

   const verifyPass = form.confirmPass


  const onSubmitForm = (e) => {
    e.preventDefault()

    signup(form, cleanFields, Navigate, setIsLoading)
  }

    signup(body, cleanFields, Navigate, setIsLoading, verifyPass)

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


    <div>Página de cadastro dos usuários !</div>

    <div>
      <Form onSubmit={onSubmitForm}>

        <input placeholder='Name'
        value={form.name}
        type='text'
        name='name'
        required
        onChange={onChange}
        ></input>

        <input  placeholder='Email'
        value={form.email}
        type='email'
        name='email'
        required
        onChange={onChange}
        ></input>

        <input  placeholder='Cpf'
        value={form.cpf}
        pattern={'[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}'}
        title={'Seu cpf deve conter 11 números separados por pontos, ex: 123.456.789-10'}
        minLength='11'
        maxLength='11'
        type='number'
        name='cpf'
        required
        onChange={onChange}
        ></input>

        <input  placeholder='Senha'
        value={form.password}
        minLength={'8'}
        maxLength={'15'}
        title={'Sua senha deve conter entre 8 a 15 caracteres.'}
        type='password'
        name='password'
        required
        onChange={onChange}
        ></input>

        <input  placeholder='Confirme a senha'
        value={form.confirmPass}
        minLength={'8'}
        maxLength={'15'}
        type='password'
        name='confirmPass'
        required
        onChange={onChange}
        ></input>


        <button type='submit'>Cadastrar</button>

      </Form>
      <div>Já possui uma conta ? Faça <strong onClick={() =>goToPage(Navigate, 'login')}>login</strong></div>

    </div>

  </DivContainer>

  )
}

export default SignupPage
