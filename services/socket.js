const SocketService = require('../utils/socketUtils/socketService');

class SocketSingleton {
  constructor(server) {
    if (!SocketSingleton.instance) {
      SocketSingleton.instance = new SocketService(server);
    }
  }

  static getSocketInstance() {
    // TODO: check if instance is null and create new instance with server
    // TODO: probably have to refactor out server and export it here
    return SocketSingleton.instance;
  }
}
module.exports = SocketSingleton;
