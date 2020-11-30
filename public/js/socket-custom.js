

var socket = io();

// Escuchar
socket.on('connect', function(){
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor')
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Gian',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta server: ' + resp.resp)
});

// Escuchar Información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje)
})