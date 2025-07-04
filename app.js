const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
 
io.on("connection",function(socket){
    socket.on("send-location",function(data){
        // io.emit("receive-location",{id:socket.id, ...data});
        data.id = socket.id;
        io.emit("receive-location",data);
    });
    // console.log("connected");
    socket.on("disconnected",function(){
        io.emit("user-disconnected",socket.id);
    })
});

app.get("/",function(req,res){
    res.render("index");
});

server.listen(3000);