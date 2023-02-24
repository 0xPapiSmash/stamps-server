// eslint-disable-next-line import/extensions
const dotenv = require('dotenv');
const { mainnetAddresses, testnetAddresses } = require('../globals/flowAddresses.js');

dotenv.config();

const env = {
  development: {
    contractFungibleToken: testnetAddresses.fungibleToken,
    contractNonFungibleToken: testnetAddresses.nonFungibleToken,
    contractMetadataViews: testnetAddresses.metadataViews,
    contractFlowToken: testnetAddresses.flowToken,
    contractNftStorefrontV2: testnetAddresses.nftStorefrontV2,
    adminAddress: process.env.ADMIN_TESTNET_ADDRESS,
    adminPrivateKeyIndex0: process.env.ADMIN_TESTNET_PRIVATE_KEY,
    adminPrivateKeyIndex1: process.env.ADMIN_TESTNET_PRIVATE_KEY_INDEX_1,
    adminPrivateKeyIndex2: process.env.ADMIN_TESTNET_PRIVATE_KEY_INDEX_2,
    flowAccessNodeApi: 'https://rest-testnet.onflow.org',
    flowDiscoveryWallet: 'https://fcl-discovery.onflow.org/testnet/authn',
    flowNetwork: 'testnet',
  },
  production: {
    contractFungibleToken: mainnetAddresses.fungibleToken,
    contractNonFungibleToken: mainnetAddresses.nonFungibleToken,
    contractMetadataViews: mainnetAddresses.metadataViews,
    contractFlowToken: mainnetAddresses.flowToken,
    contractNftStorefrontV2: mainnetAddresses.nftStorefrontV2,
    adminAddress: process.env.ADMIN_MAINNET_ADDRESS,
    adminPrivateKeyIndex0: process.env.ADMIN_MAINNET_PRIVATE_KEY,
    adminPrivateKeyIndex1: process.env.ADMIN_MAINNET_PRIVATE_KEY_INDEX_1,
    adminPrivateKeyIndex2: process.env.ADMIN_MAINNET_PRIVATE_KEY_INDEX_2,
    flowAccessNodeApi: 'https://rest-mainnet.onflow.org',
    flowDiscoveryWallet: 'https://fcl-discovery.onflow.org/authn',
    flowNetwork: 'mainnet',
  },
};

// check process.env.NODE_ENV if its `production`, if not, its `development`
const currentEnv = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  }
  return 'development';
};

export default env[currentEnv()];
