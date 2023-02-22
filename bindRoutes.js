/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

// Import routers here
const healthCheckRouter = require('./routes/healthCheckRouter.js');

// Import controllers here
const HealthCheckController = require('./controllers/healthCheckController.js');

// Initialise controllers
const healthCheckController = new HealthCheckController('HealthCheck');

module.exports = function bindRoutes(app) {
  app.get('/', healthCheckRouter(healthCheckController));
};
