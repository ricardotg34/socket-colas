import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [escritorio, setEscritorio] = useState(1);
  let history = useHistory();
  const handleClick = () => {
    history.push(`/escritorio/${escritorio}`);
  }
  const handleChange = (e) => {
    setEscritorio(e.target.value);
  }

  return (
    <div className="container">
      <h1>Programa de Colas</h1>
      <div class="row">
        <div class="col-6">
          <Link to="/publico" className="btn btn-primary">Pantalla publica</Link>
          <Link to="/nuevo-ticket" className="btn btn-secondary"><span>Crear Tickets</span></Link>
        </div>
        <div class="col-6">
            <input
              type="number"
              class="form-control"
              placeholder="Escritorio"
              autofocus
              required
              onChange={handleChange}
              value={escritorio}
            />
            <br />
            <button onClick={handleClick} class="btn btn-primary">
              Ingresar
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
