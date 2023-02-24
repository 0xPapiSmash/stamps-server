const { Server } = require('socket.io');
const {
  JOIN_ROOM, JOINED_ROOM,
} = require('../../globals/socketIoTags');

// Class that contains logic and functions to deal with sockets
class SocketService {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: [
          'http://localhost:3000'],
      },
    });

    this.io.on('connection', (socket) => {
      // Joining a specific channel for a user when user logs in
      socket.on(JOIN_ROOM, (userId) => {
        const room = userId.currentUserId;
        socket.join(room);
        this.io.to(room).emit(JOINED_ROOM, userId);
      });
    });
  }

  emitEventToAll(event, body) {
    this.io.emit(event, body);
  }

  emitEventToClient(event, body, userId) {
    this.io.to(userId).emit(event, body);
  }

  getRooms() {
    return this.io.sockets.adapter.rooms;
  }

  getClientInRoom(room) {
    return this.io.sockets.adapter.rooms[room];
  }
}

export default SocketService;
