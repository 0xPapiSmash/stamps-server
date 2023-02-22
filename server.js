/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const bindRoutes = require('./bindRoutes');

dotenv.config();

const corsOptions = {
  // To allow requests from client
  origin: ['http://localhost:3000'],
  exposedHeaders: ['set-cookie'],
};

const app = express();
app.use(cookieParser());
app.use(cors(corsOptions));
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
