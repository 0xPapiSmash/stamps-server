/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const supabase = require('../../config/supabaseClient');

async function getAllCollectionDataByUserId(userId) {
  // Get collection data (array) where user_id === userId
  const { data } = await supabase
    .from('collections')
    .select('*')
    .eq('user_id', userId);
    // if no collection found where user_id === userId, throw error
  if (data?.length === 0 || data === null) {
    throw Error(`No collection with userId ${userId} found`);
    // if collection data is found, return collection data
  } else {
    return data;
  }
}

async function getCollectionById(collectionId) {
  // Get collection data (array) where id === collectionId
  const { data } = await supabase
    .from('collections')
    .select('*')
    .eq('id', collectionId);
    // if no collection found where id === collectionId, throw error
  if (data?.length === 0 || data === null) {
    throw Error(`No collection with collectionId ${collectionId} found`);
    // if collection data is found, return collection data
  } else {
    return data[0];
  }
}

async function createNewCollection(
  collectionName,
  collectionDescription,
  collectionImageUrl,
) {
  const { status, error } = await supabase
    .from('collections')
    .insert([{
      collectionName,
      collectionDescription,
      collectionImageUrl,
    }]);
  if (status !== 201) {
    throw Error('Error creating collection', error);
  } else {
    return data[0].id;
  }
}

async function updateCollectionContractDeployStatus(
  table,
  collectionId,
  collectionContractDeployStatus,
) {
  try {

  } catch (error) {
    return console.log('Error updating collection', error);
  }

  // ---postgres version---
  // return await collectionModel.update(
  //   {
  //     collectionContractDeployStatus,
  //   },
  //   {
  //     where: {
  //       id: collectionId,
  //     },
  //   },
  // );
}

module.exports = {
  getAllCollectionDataByUserId,
  getCollectionById,
  createNewCollection,
  updateCollectionContractDeployStatus,
};
