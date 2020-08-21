const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();


io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.nextTicket();
        callback(siguiente);
        //ejecuat nodemon con cambios en -e js, html
    })

    client.emit('estadoActual',{
        lastTicket: ticketControl.getLastTicket(),
        last4: ticketControl.getLast4()
    });

    client.on('atenderTicket', (data, callback) => {
        if( !data.desktop) {
            return callback({
                err: true,
                mensaje: "El escritorio es necesario"
            });
        }
        let attendTicket = ticketControl.attendTicket(data.desktop);
        callback(attendTicket);
        //Actualizar cambios en los ultimos 4
        client.broadcast.emit('ultimos4', {
            last4: ticketControl.getLast4()
        });
    })


});