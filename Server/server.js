const express = require('express');
const app = express();
const port = process.env.port || 5000;
const http = require('http')
const cors = require('cors')
// const mongoose = require('mongoose')
const { Server } = require("socket.io")
app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors:{   
        origin:"http://localhost:3001",
        methods: ["GET" , "POST"]
    }
})
 
io.on("connection", (socket)=>{
    console.log("User connected - " + socket.id);

    
    // Joining Room
    socket.on("join_room" , (data)=>{
        console.log(`User with ID : ${socket.id} joined room : ${data}`)
    })
    // Sending message
    socket.on("send_message" , (data) =>{
        console.log("Received message " + data)
        socket.to(data.room).emit("receive_message", data);
    }
    )
    
    // User disconnection 
    socket.on("disconnect",()=>{
        console.log("User Disconnected ",socket.id)
    })
})

server.listen(port , ()=>{
    console.log("Server up and running on " + port)
})
