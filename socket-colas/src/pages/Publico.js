import React, { useEffect } from 'react';
import socketIOClient from "socket.io-client";

const Publico = () => {
  const socket = socketIOClient("http://127.0.0.1:8000");

  useEffect(() => {
    socket.on('connect', function() {
      console.log("Conectado al servidor");
    });
    socket.on('disconnect', function() {
      console.log("Desconectado al servidor");
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table>
      <tr>
        <td valign="middle" class="ticket-actual">
          <span id="lblTicket1" class="ticket-actual-numero">Ticket W</span>
          <br />
          <span id="lblEscritorio1" class="ticket-actual-escritorio">Escritorio W</span>
        </td>
        <td>
          <table>
            <tr>
              <td>
                <span id="lblTicket2" class="ticket-secundario">Ticket X</span>
                <br />
                <span id="lblEscritorio2">Escritorio X</span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="lblTicket3" class="ticket-secundario">Ticket Y</span>
                <br />
                <span id="lblEscritorio3">Escritorio Y</span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="lblTicket4" class="ticket-secundario">Ticket Z</span>
                <br />
                <span id="lblEscritorio4">Escritorio Z</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  )
}

export default Publico
