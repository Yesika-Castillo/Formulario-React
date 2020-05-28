import React, { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [Nacimiento, setNacimiento] = useState('')
  const [Cedula, setCedula] = useState('')
  const [Correo, setCorreo] = useState('')
  const [repetirCorreo, setRepetirCorreo] = useState('')
  const [Clave1, setClave1] = useState('')
  const [Clave2, setClave2] = useState('')

  const resultadoFormulario = () => {
    console.log(
      nombre,
      Cedula,
      Nacimiento,
      Correo,
      repetirCorreo,
      Clave1,
      Clave2
    )
  }

  function comprobarClave() {
    if (Clave1 == Clave2) {
      resultadoFormulario()
      alert('Las dos claves son iguales...\n positivo')
    } else {
      alert('Las dos claves son distintas...\n negativo')
    }
  }

  return (
    <div>
      <ul id="Menu principal"> </ul>
      <br></br>

      <img
        src="https://i.pinimg.com/originals/b4/21/51/b4215176dc648eb191b7f2122b6f6c80.jpg"
        onerror="this.src = '/public/images/logo-fallback.svg'"
        class="img-responsive"
        alt=""
        width="500px"
        height="250px"
      ></img>

      <div className="container">
        <h1 align="center" className="title">
          Formulario ❤{' '}
        </h1>
        <label For="username">Nombre Completo </label>
        <input
          name="username"
          id="username"
          className="new-task"
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
        />
        <label for="start">Fecha de Nacimiento: </label>
        <input
          className="new-task"
          type="date"
          id="start"
          name="trip-start"
          min="1940-01-01"
          max="2020-12-31"
          value={Nacimiento}
          onChange={(evento) => setNacimiento(evento.target.value)}
        />
        <label For="userCedula">Numero Cedula </label>
        <input
          name="Cedula"
          id="Cedula"
          className="new-task"
          type="text"
          placeholder="Cedula"
          value={Cedula}
          onChange={(evento) => setCedula(evento.target.value)}
        />
        <label For="correo">Correo Electronico </label>
        <input
          name="correo"
          className="new-task"
          id="correo"
          type="text"
          placeholder="Alguien@.com"
          value={Correo}
          onChange={(evento) => setCorreo(evento.target.value)}
        />
        <label For="repetirCorreo">Repetir correo Eletronico </label>
        <input
          name="repetirCorreo"
          className="new-task"
          id="repetirCorreo"
          type="text"
          placeholder="Alguien@.com"
          value={repetirCorreo}
          onChange={(evento) => setRepetirCorreo(evento.target.value)}
        />
        <label For="clave1">Contraseña </label>
        <input
          type="password"
          className="new-task"
          name="clave1"
          id="Clave1"
          value={Clave1}
          onChange={(document) => setClave1(document.target.value)}
        />
        <label For="clave2">Repetir Contraseña</label>
        <input
          type="password"
          className="new-task"
          name="clave2"
          id="clave2"
          value={Clave2}
          onChange={(document) => setClave2(document.target.value)}
        />

        <button className="boton" onClick={() => comprobarClave()}>
          Enviar
        </button>
      </div>
    </div>
  )
}

export default App
