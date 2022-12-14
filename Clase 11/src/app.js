import express from "express";
import __dirname from '..//src/utils.js';
import handlebars from "express-handlebars";
<<<<<<< HEAD
import viewsRouter from '../src/routes/views.router.js';
import { Server } from "socket.io";
=======
import viewsRouter from '/routes/views.Router.js';
import Server from "socket.io";
>>>>>>> 9c5da258a0d5633cc919cf6e698bc69b5bbdc49d

const app = express();
const httpServer = app.listen(8082, () => console.log("Listening on PORT 8080"));

const io = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+ '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+ '/public'));
app.use('/', viewsRouter);


let messages = []
io.on('connection', socket => {
    console.log('New client connected');

    // Escucha los mensajes de un user
    socket.on('message', data => {
        messages.push(data) // Guardamos el mensaje

        // Emitimos el mensaje para los demas
        io.emit('messageLogs', messages)
    })
})