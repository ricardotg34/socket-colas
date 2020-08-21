import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import socketIOClient from "socket.io-client";

const Escritorio = () => {
  const [num, setNum] = useState('...')
  let { escritorio } = useParams();
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

  const handleClick = () => {
    socket.emit('atenderTicket', {desktop: escritorio}, function (resp) {
        if (resp === 'No hay tickets') {
            setNum(resp);
            return;
        }
        setNum('Ticket '+ resp.num);
    });
  }


  return (
    <div className="container">
      <h1>Escritorio {escritorio}</h1>
      <h4>Atendiendo a <small>{num}</small></h4>

      <button class="btn btn-primary" onClick={handleClick}>
        Atender siguiente ticket
      </button>
    </div>
  )
}

export default Escritorio
