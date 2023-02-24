/* eslint-disable class-methods-use-this */

module.exports = class HealthCheckController {
  healthCheck(req, res) {
    try {
      return res.send("Sikrit's server is running");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
};
