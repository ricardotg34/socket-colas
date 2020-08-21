import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";

const NuevoTicket = () => {
  const [lastTicket, setLastTicket] = useState('Cargando...');
  const socket = socketIOClient("http://127.0.0.1:8000");

  useEffect(() => {
    socket.on('connect', function() {
      console.log("Conectado al servidor");
    });
    socket.on('disconnect', function() {
      console.log("Desconectado al servidor");
    });
    socket.on('estadoActual', function (resp) {
      setLastTicket(resp.lastTicket);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    socket.emit('siguienteTicket', null, function (nextTicket) {
      setLastTicket(nextTicket);
    });
  }

  return (
    <div className="bgblue">
      <table>
        <tbody>
        <tr>
          <td>
            <span id="lblNuevoTicket">
              {lastTicket}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-secondary btn-lg" onClick={handleClick}>
              Generar nuevo ticket
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NuevoTicket
