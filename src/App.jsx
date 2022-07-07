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

  console.log(errors);

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
        {errors.name && <span> O nome é obrigatório</span>}

        CPF
        <input {...register("cpf")} />
        {errors.name && <span> O CPF é obrigatório</span>}

        E-Mail
        <input {...register("email")} />
        {errors.name && <span> O e-mail é obrigatório</span>}

        Data de Nascimento
        <input {...register("birthdate")} />
        {errors.name && <span> A data de nascimento é obrigatória</span>}
            
        Gênero
          <select {...register("Gênero")}>
            <option option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outros">Outros</option>
          </select>
            
        Senha
        <input {...register("password")} />
        {errors.name && <span> A senha é obrigatória</span>}
            
        Confirmar Senha
        <input {...register("confirmpassword")} />
        {errors.name && <span> A confirmação de senha é obrigatória</span>}
            
        <button type="submit">Cadastrar</button>
        <button className="cancel"  type="Reset">Cancelar</button>

          </label>
        </form>
      </header>
    </div>
  )
}

export default App
