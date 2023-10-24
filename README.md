# Node.js, Express, and Socket.io Server

This is a Node.js server that uses Express for serving static files and Socket.io for real-time communication with connected clients. The server also provides a simple route for Express. This README provides an overview of the project, its functionality, and how to run the server.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Overview](#project-overview)
- [Usage](#usage)
- [Real-Time Communication](#real-time-communication)
- [Disconnect Handling](#disconnect-handling)
- [License](#license)

## Getting Started

To get started with the Node.js, Express, and Socket.io server, you'll need to set it up on your local machine.

### Prerequisites

Before you proceed, ensure you have the following installed:

- Node.js (v14.0.0 or higher)

### Installation

Follow these steps to install and run the server:

1. Clone the repository or create a new directory for your project:

   ```bash
   git clone https://github.com/yourusername/node-express-socket-server.git
2. Navigate to the project directory:
 ```bash
cd node-express-socket-server
```

3. Install project dependencies (Express, Socket.io):
 ```bash
  npm install
  ```
4. Start the Node.js server:
```bash
node server.js
```

The server will be running at http://localhost:5002, serving static files and handling real-time communication.

## Project Overview
This project is a Node.js server that combines Express for serving static files and Socket.io for real-time communication with connected clients. The server also provides a simple Express route at /express-server.

## Usage
To use this server, you can access the following endpoints:

http://localhost:5002 - Serves static files (e.g., the client's build files).    
http://localhost:5002/express-server - Access a simple Express route that responds with "Express js".
## Real-Time Communication
The server uses Socket.io for real-time communication with connected clients. When a client connects, the server sends a message to the client and listens for incoming messages.

When a client connects, it receives the message: "this message is from server."
```bash
io.on("connection", function (socket) {
  console.log("User connected to socket");
  socket.send("this message is from server");

  socket.on('disconnect', () => {
    console.log("User disconnected from socket");
  });
});
```

## License
This project is licensed under the MIT License. You can find the full license details in the LICENSE file.
