/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import supabase from '../../config/supabaseClient';

async function getAllCollectionDataByUserId(userId) {
  // Get collection data (array) where user_id === userId
    const { data } = await supabase
      .from('collections')
      .select('*')
      .eq('user_id', userId)
    // if no collection found where user_id === userId, throw error
    if (data?.length === 0 || data === null) {
      throw Error(`No collection with userId ${userId} found`);
    // if collection data is found, return collection data
    } else {
      return data;
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


module.exports =  {
  getAllCollectionDataByUserId,
  updateCollectionContractDeployStatus
}