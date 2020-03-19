# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


## Project Deliverables
### Write Up - Student includes a README to explain how to test their code.
- Current file
#### To run tests
- truffle test

### Write Up - Student provides Contract Addresses, Contract Abi's, OpenSea MarketPlace Storefront link's.
- Contract ABIs: eth-contracts/contracts/build/
- Abis are within the json representation for the various contracts / files listed

## ERC721
### ERC721 Mintable Contract - Student completes the boilerplate ERC721 Mintable Contract in ERC721Mintable.sol
### ERC721 Mintable Contract Test Cases - Student writes and passes the test cases in TestERC721Mintable.js
### ERC721 Mintable Contract Zokrates Test - Student writes and passes the test cases in 'TestSquareVerifier.js'
### ERC721 Mintable Contract Zokrates Test Cases - Student writes and passes the test cases in TestSolnSquareVerifier.js 

## Zokrates
### Zokrates program written using DSL - Student completes the Zokrates proof in square.code by adding the variable names in square.code
### Zokrates Test Cases - Student completes test contract in SolnSquareVerifier.sol
### Zokrates Test Cases - Student writes and passes the test cases in 'TestSolnSquareVerifier.js' 

## OpenSea Marketplace
### Market Place - Student list ERC721/ ZoKrates tokens & complete transactions on market place
- https://rinkeby.opensea.io/assets/unidentified-contract-v218
https://rinkeby.opensea.io/assets/unidentified-contract-v224
SEE MESSAGE BELOW
Tokens Listed on OpenSea:
1. 
2. 
3. 
4. 
5. 
Address to purchase tokens: 


## Deployment
### Deployment - Student deploys ERC721 contracts with Zokrates integration
- SquareVerifier Contract Address: 0xFd08031B0D35EBf67178e5aD727458d48B5B9833
// OLD: 0x02d531848fEE6770d6Ed29A94D2d1eAaF2A0de25
// OLD: 0x9973a2573673013b6f3eA6D19AB70DBcca2Abb9e
// OLD: 0xAE275d17F7BeeC17BCa15cbB653E88966dD4DA9C
- SolnSquareVerifier Contract Address: 0x59937e6a845D6Db05aC8Ed2cf0F8C773bC7a29ca
// OLD: 0x96EAeaa00F664ce51EbF8cB501d266D57824F316
// OLD: 0xDbA019f35008C25641BD25A752F02Be49cBE8C79
// OLD: 0x378cd8dD5EcEaCd87B359B5d974b7d75c439ce28
- Output is in Output/DeploymentOutput.txt




Can you provide any insight to the error I am running into when trying to mint the 10 tokens using scripts/mint.js?
I am running into the following error when trying to mint the 10 tokens using mint.js. Can you provide any insight? I have posted some questions on the forum but not yet received a response. 

node scripts/mint.js
{
  mintTo: [Function: bound _createTxObject],
  '0x755edd17': [Function: bound _createTxObject],
  'mintTo(address)': [Function: bound _createTxObject]
}
Could not mint token
Error: Transaction has been reverted by the EVM:
{
  "blockHash": "0x71add8fba4654701379b72577c87b7219e566d66805b936724ae491ccb183030",
  "blockNumber": 6164478,
  "contractAddress": null,
  "cumulativeGasUsed": 1351254,
  "from": "0x276c1ad0c8a5bb909592d3f3781b14c6664ba90e",
  "gasUsed": 21659,
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status": false,
  "to": "0x96eaeaa00f664ce51ebf8cb501d266d57824f316",
  "transactionHash": "0x540a79a97abf28d3f816dfacf8d75f3033abc346a4caf5d65bd2c1179d71572c",
  "transactionIndex": 5,
  "events": {}
}
    at Object.TransactionError (/Users/peyton/Documents/Nanodegrees/BlockchainDev/blockchain-developer-nanodegree/Blockchain-Capstone/eth-contracts/node_modules/web3-core-helpers/src/errors.js:63:21)
    at Object.TransactionRevertedWithoutReasonError (/Users/peyton/Documents/Nanodegrees/BlockchainDev/blockchain-developer-nanodegree/Blockchain-Capstone/eth-contracts/node_modules/web3-core-helpers/src/errors.js:75:21)
    at /Users/peyton/Documents/Nanodegrees/BlockchainDev/blockchain-developer-nanodegree/Blockchain-Capstone/eth-contracts/node_modules/web3-core-method/src/index.js:448:48
    at processTicksAndRejections (internal/process/task_queues.js:97:5) {
  receipt: {
    blockHash: '0x71add8fba4654701379b72577c87b7219e566d66805b936724ae491ccb183030',
    blockNumber: 6164478,
    contractAddress: null,
    cumulativeGasUsed: 1351254,
    from: '0x276c1ad0c8a5bb909592d3f3781b14c6664ba90e',
    gasUsed: 21659,
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: false,
    to: '0x96eaeaa00f664ce51ebf8cb501d266d57824f316',
    transactionHash: '0x540a79a97abf28d3f816dfacf8d75f3033abc346a4caf5d65bd2c1179d71572c',
    transactionIndex: 5,
    events: {}
  }
}
