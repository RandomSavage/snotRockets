
const WebSocket = require('ws')

const PORT = 5000

const wsServer = new WebSocket.Server({
  port: PORT
})

wsServer.on('connection', function(socket) {
  //Some Feedback on the Console
  console.log('A client just Connected')

  //Attach some behavior to the incoming Socket
  socket.on('message', function(msg) {
    console.log(`Received message from client ${msg}`)
    //socket.send(`Take this back ${msg}`)

    //Broadcast that message to all connected clients
    wsServer.clients.forEach(function(client) {
      client.send(`Someone said: ${msg}`)
    })
  })

  socket.on('close', function() {
    console.log("Client Disconnected!")
  })
})

let dateNow = new Date()
console.log(`${dateNow} Server is Listening on port ${PORT}`)

