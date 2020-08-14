const socket = io()

document.getElementById('chat-submit').addEventListener('submit', (e) => {
  e.preventDefault()
  const chatText = e.target.elements.message.value

  socket.emit('sendMessage', chatText)
})

socket.on('message', (message) => {
  console.log(message)
})