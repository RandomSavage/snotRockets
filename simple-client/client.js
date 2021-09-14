console.log("Stuff it meathead!")
let h2 = document.createElement('h2');
h2.innerText = "Enter Dirty Cages"
document.body.append(h2)

// const WebSocket = require('ws')
// const WebSocket = require('ws')


// const serverAddress = "ws://127.0.0.1:5000"

// const ws = new WebSocket(serverAddress)




// ws.on('open', function(){
//   ws.send("Hello Server!")
// })

// ws.on('message', function(msg) {
//   console.log(`Received Message from the Server: ${msg}`)

// })

//browser side connection to server
const serverAddress = "ws://127.0.0.1:5000";
const serverConnection = new WebSocket(serverAddress)

serverConnection.onopen = function() {
  console.log(`I just connected to the server on ${serverAddress}`)
  serverConnection.send('hello my Server')
}

let userMsg = document.createElement('p');

let userInput = document.createElement('input')
let target;

let inputBtn = document.createElement('button')
inputBtn.innerText = "Submit"
inputBtn.addEventListener('click', () => {
  target = userInput.value;
  sendTargetToServer(target)
  userMsg.innerText = target
})

document.body.append(userMsg)
document.body.append(userInput)
document.body.append(inputBtn)

function sendTargetToServer(target) {
  serverConnection.send(target)
}


