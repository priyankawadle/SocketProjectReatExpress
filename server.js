const express = require("express");
const app = express();
const http = require("http");
const path = require('path')

const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

app.use(express.static('client/build'))

app.get('*',(req,res)=>{
 res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})

app.get("/express-server", (req, res) => {
  res.send("Express js");
});

io.on("connection", function (socket) {
  console.log("User connected to socket");
  // send a message back to the client when they connect
  socket.send("this message is from server")

  socket.on('disconnect',()=>{
  console.log("User disconnected to socket");
  })
});

expressServer.listen(5002, () => {
  console.log("server running on port 5002");
});
