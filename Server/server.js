const express = require('express');
const app = express();
const port = process.env.port || 5005;
const http = require('http')
const cors = require('cors')
// const mongoose = require('mongoose')
const { Server } = require("socket.io")
app.use(cors)

const server = http.createServer(app)

const io = new Server(server,{
    cors:{   
        origin:"http://localhost:3001",
        methods: ["GET" , "POST"]
    }
})
 
io.on("connection", (socket)=>{
    console.log("User connected - " + socket.id);

    // Sending message
    socket.on("send_message" , (data) =>{
        console.log(`User said ${data.message}`)
    }
    )

    // Joining Room
    socket.on("join_room" , (data)=>{
        console.log(`User with ID : ${socket.id} joined room : ${data}`)
    })

    // User disconnection 
    socket.on("disconnect",()=>{
        console.log("User Disconnected ",socket.id)
    })
})

app.set('view engine','ejs')

app.get('/api',(req,res)=>{
    res.json({
        "Username": "Usman",
        "Age" : 21,
        "Placed" : true
    });
    console.log("Bloop2")
})
    

app.get('/login')

server.listen(port , ()=>{
    console.log("Server up and running on " + port)
})
