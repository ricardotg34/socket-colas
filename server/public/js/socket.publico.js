//Comando para establecer la conexión
var socket = io();

socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Desconectado al servidor");
});

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [
    lblTicket1,
    lblTicket2,
    lblTicket3,
    lblTicket4
];
var lblEscritorios = [
    lblEscritorio1,
    lblEscritorio2,
    lblEscritorio3,
    lblEscritorio4
];

socket.on('estadoActual',function (data) {
    updateHTML(data.last4);
})

socket.on('ultimos4',function (data) {
    updateHTML(data.last4);
})

function updateHTML(last4) {
    for (let i = 0; i < last4.length; i++) {
        lblTickets[i].text('Ticket ' + last4[i].num);
        lblEscritorios[i].text('Escritorio ' + last4[i].desktop);
    }
}
