import React from 'react'
import logo from './assets/logo.png'

import './App.css'

function App() {
  return (
    <form>
      <img src={logo} alt="logo" />

      <label>
        Nome
        <input type="text" />

        Cpf
        <input type="text" />

        E-Mail
        <input type="text" />

        Data de Nascimento
        <input type="text" />

        Gênero
        <input type="text" />

        Senha
        <input type="text" />

        Confirmar Senha
        <input type="text" />

        <button type="submit">Cadastrar</button>
        <button type="submit">Cancelar</button>
      </label>
    </form>
  )
}

export default App
