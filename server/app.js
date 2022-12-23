const express = require('express'); 
const http = require('http'); 
const { Server } = require('socket.io'); 
const cors = require('cors'); 

const app = express(); 
app.use(cors); 

const httpServer = http.createServer(app); 
const io = new Server(httpServer, { 
    cors: { 
        origin: '*', 
        methods: ["GET", "POST"] 
    } 
}); 

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
    })
})


httpServer.listen(8080, () => { 
    console.log(`Server is listening on port 8080`);
}) 
