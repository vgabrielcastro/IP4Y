import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import logo from './assets/logo.png'
import './App.css'

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  cpf: yup.string().required("O CPF é obrigatório"),
  email: yup.string().email().required("O email é obrigatório"),
  birthdate: yup.string().required("A data de nascimento é obrigatória"),
  password: yup.string().min(6, "A senha deve ser maior que 6 caracteres").required("O senha é obrigatório"),
  confirmpassword: yup.string().required("Confirmar a senha é obrigatorio").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
}).required();




function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
        <input type="text" placeholder=" Ex: Gabriel " {...register("name", { required: true })} />
        <span>{ errors.name?.message }</span>

        CPF
        <input placeholder="Ex: 123.456.789-01 " maks="999.999.999-99" {...register("cpf")} />
        <span> { errors.cpf?.message }</span>

        E-Mail
        <input type="text" placeholder=" Ex: email@exemplo.com " {...register("email")} />
        <span> { errors.email?.message }</span>

        Data de Nascimento
        <input placeholder='Ex: 99/99/9999'{...register("birthdate")} />
        <span> { errors.birthdate?.message }</span>
            
        Gênero
          <select {...register("Gênero")}>
            <option option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outros">Outros</option>
          </select>
            
        Senha
        <input type="password" {...register("password")} />
        <span>{ errors.password?.message }</span>
            
        Confirmar Senha
        <input type="password" {...register("confirmpassword")} />
        <span>{ errors.confirmpassword?.message }</span>
            
        <button type="submit">Cadastrar</button>
        <button className="cancel"  type="Reset">Cancelar</button>

          </label>
        </form>
      </header>
    </div>
  )
}

export default App
