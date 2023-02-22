const express = require('express');

const router = express.Router();

module.exports = function healthCheckRouter(controller) {
  router.get('/', controller.healthCheck.bind(controller));
  return router;
};
