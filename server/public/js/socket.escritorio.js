//Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Desconectado al servidor");
});

if ( !searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

$('h1').text('Escritorio ' + escritorio);
$('button').on('click', function () {
    socket.emit('atenderTicket', {desktop: escritorio}, function (resp) {
        if (resp === 'No hay tickets') {
            label.text(resp);
            return;
        }
        label.text ('Ticket '+ resp.num);
    });
})

