import React from 'react'
import { useForm } from 'react-hook-form'
import logo from './assets/logo.png'

import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function onSubmit(userata) {
    console.log(userata);
  }

  return (
    <div className="App">
      <header className="App-header">
      
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex'>
        <img src={logo} alt="logo" />
        <p>Formulario IP4Y</p>
      </div> 

      <label>
        Nome
        <input {...register("name")} />

        CPF
        <input {...register("CPF")} />

        E-Mail
        <input {...register("email")} />

        Data de Nascimento
        <input {...register("birthdate")} />

        Gênero
        <input {...register("genre")} />

        Senha
        <input {...register("password")} />

        Confirmar Senha
        <input {...register("confirmpassword")} />

        <button type="submit">Cadastrar</button>

          </label>
        </form>
      </header>
    </div>
  )
}

export default App
