async function createFlowAccount(publicKey, accountName, networkName) {
  try {
    const accountDetailsJson = await execPromise(
      `flow accounts create --key ${publicKey} --signer ${accountName} --network ${networkName} -o json -f flow.json -f flow.private.json`
    );
    if (accountDetailsJson) {
      const accountDetailsParsed = JSON.parse(accountDetailsJson.stdout);
      return accountDetailsParsed;
    }
  } catch (error) {
    logger.error(`Error occured when creating account: ${error}`);
    throw new Error(error);
  }
}

async function generateKeyPair() {
  try {
    const keyPairJson = await execPromise("flow keys generate -o json");
    if (keyPairJson) {
      const keyPair = JSON.parse(keyPairJson.stdout);
      return keyPair;
    }
  } catch (error) {
    logger.error(`Error occured when generating key pair: ${error}`);
    throw new Error(error);
  }
}

async function transferToken(amount, recipient) {
  try {
    const flowService = new FlowService(
      process.env.ADMIN_TESTNET_ADDRESS,
      process.env.ADMIN_TESTNET_PRIVATE_KEY,
      0
    );
    const authorization = flowService.authorizeMinter();
    const transaction = fs.readFileSync(
      path.join(__dirname, `../cadence/transactions/flow/transfer_tokens.cdc`),
      "utf8"
    );

    const result = await flowService.sendTx({
      transaction,
      args: [fcl.arg(amount, t.UFix64), fcl.arg(`0x${recipient}`, t.Address)],
      authorizations: [authorization],
      payer: authorization,
      proposer: authorization,
    });
    return result;
  } catch (error) {
    logger.error(`Error occured when transferring tokens: ${error}`);
    throw new Error(error);
  }
}

module.exports =  {
  createFlowAccount,
  generateKeyPair, 
  transferToken
}