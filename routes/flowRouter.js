const express = require('express');

const router = express.Router({ mergeParams: true });

module.exports = function flowRouter(controller) {
  router.post(
    // change to `/users/:userId/collections/:collectionId/create-fund-deploy` in v2
    '/create-fund-deploy',
    controller.createFundDeployCollectionByUserId.bind(controller),
  );

  // router.post(
  //   // change to `/users/:userId/collections/:collectionId/deploy` in v2
  //   '/deploy',
  //   controller.deployCollectionByCollectionId.bind(controller),
  // );

  return router;
};
