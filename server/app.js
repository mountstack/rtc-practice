// const express = require('express'); 
// const http = require('http'); 
// const { Server } = require('socket.io'); 
// const cors = require('cors'); 
// const {roomHandler} = require('./room/room');

import express from 'express'; 
import http from 'http'; 
import { Server } from 'socket.io'; 
import cors from 'cors'; 
import {roomHandler} from './room/room.js'

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

    roomHandler(socket); 

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
    }) 
})


httpServer.listen(8080, () => { 
    console.log(`Server is listening on port 8080`);
}) 
