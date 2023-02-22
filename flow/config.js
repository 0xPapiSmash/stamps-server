import { config } from '@onflow/fcl';
import envConfig from '../config/envConfig.js'

config({
  'accessNode.api': envConfig.flowAccessNodeApi, 
  'discovery.wallet': envConfig.flowDiscoveryWallet, 
});
