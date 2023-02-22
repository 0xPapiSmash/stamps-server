import express from 'express';

const router = express.Router({ mergeParams: true });

export default function flowRouter(controller) {
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
}