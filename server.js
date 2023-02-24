/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
require('./flow/config.js')
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');
const dotenv = require('dotenv');
const path = require('path');
const { Server } = require('socket.io');
const bindRoutes = require('./bindRoutes');
const SocketSingleton = require('./services/socket.js')

dotenv.config();

const corsOptions = {
  // To allow requests from client
  origin: ['http://localhost:3000'],
  exposedHeaders: ['set-cookie'],
};

const app = express();
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public'))); // to load files in public directory
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json({ limit: '50mb' }));

// routes
bindRoutes(app);

const { PORT } = process.env;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Stamps server listening on port ${PORT}`);
});

// Initialize socket singleton for the first time
const socket = new SocketSingleton(server);
const socketInstance = SocketSingleton.getSocketInstance();

// assigns the socketService name to SocketService.
app.set('socketService', socketInstance);
