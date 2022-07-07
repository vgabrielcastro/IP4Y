import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import logo from './assets/logo.png'
import './App.css'
import { useState } from 'react';

const schema = yup.object({
  name: yup.string().required(),
  cpf: yup.string().required(),
  email: yup.string().email().required(),
  birthdate: yup.string().required(),
  genre: yup.string().required(),
  password: yup.string().required(),
  confirmpassword: yup.string().required(),
}).required();


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
        <p>Teste Front-End</p>
      </div> 

      <label>
        Nome
        <input {...register("name", { required: true })} />
        <span> O nome é obrigatório</span>

        CPF
        <input {...register("cpf")} />
        <span> O CPF é obrigatório</span>

        E-Mail
        <input {...register("email")} />
        <span> O e-mail é obrigatório</span>

        Data de Nascimento
        <input {...register("birthdate")} />
        <span> A data de nascimento é obrigatória</span>
            
        Gênero
        <option type="text" name="gênero" placeholder="Gênero"></option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outros">Outros</option>
            
        Senha
        <input {...register("password")} />
        <span> A senha é obrigatória</span>
            
        Confirmar Senha
        <input {...register("confirmpassword")} />
        <span> A confirmação de senha é obrigatória</span>
            
        <button type="submit">Cadastrar</button>

          </label>
        </form>
      </header>
    </div>
  )
}

export default App
