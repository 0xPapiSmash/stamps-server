const { config } = require('@onflow/fcl');
const envConfig = require('../config/envConfig.js')

config({
  'accessNode.api': envConfig.flowAccessNodeApi, 
  'discovery.wallet': envConfig.flowDiscoveryWallet, 
});
