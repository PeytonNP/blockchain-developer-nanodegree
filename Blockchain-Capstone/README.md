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
- Contract ABIs can be found within json files in this directory: eth-contracts/contracts/build/
- Abis are within the json representation for the various contracts / files listed
- SolInSquareVerifier.abi: SolinSquareVerifier.abi


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
- https://rinkeby.opensea.io/assets/unidentified-contract-v226
SEE MESSAGE BELOW
Tokens Listed on OpenSea: https://rinkeby.opensea.io/assets/unidentified-contract-v230
Account used to sell tokens: 0x276c1AD0C8a5BB909592D3f3781b14c6664BA90E
Account used to purchase tokens: 0x8514E8da5E33d8430e7DdFFd504173c921bD79Ac
Tokens put up for sale and purchased: 
1. https://rinkeby.opensea.io/assets/0x6aba1487b4af9c67aa20cb7ee9b9d9bd80ba7847/1
2. https://rinkeby.opensea.io/assets/0x6aba1487b4af9c67aa20cb7ee9b9d9bd80ba7847/2
3. https://rinkeby.opensea.io/assets/0x6aba1487b4af9c67aa20cb7ee9b9d9bd80ba7847/3
4. https://rinkeby.opensea.io/assets/0x6aba1487b4af9c67aa20cb7ee9b9d9bd80ba7847/6 - No image associated with token6
5. https://rinkeby.opensea.io/assets/0x6aba1487b4af9c67aa20cb7ee9b9d9bd80ba7847/9 - No image associated with token9

See metadata images folder as tokens minted with ids from 6 - 10 do not exist. 

![Existing metadata example](/MetadataImages/Listing1.png)
![Non-existing metadata example](/MetadataImages/Listing6.png))

## Deployment
### Deployment - Student deploys ERC721 contracts with Zokrates integration
- SquareVerifier Contract Address: 0x38C9727e46dc92F99DD734cb7d4526e7f7B5f090

// OLD Deployments: 0x31aaaCD1A9e9639495d03E1A6A215fbf6168A56f, 0xC7536B069575eFd3234C517d7c82764477B98B1B, 0xFd08031B0D35EBf67178e5aD727458d48B5B9833, 0x02d531848fEE6770d6Ed29A94D2d1eAaF2A0de25, 0x9973a2573673013b6f3eA6D19AB70DBcca2Abb9e, 0xAE275d17F7BeeC17BCa15cbB653E88966dD4DA9C

- SolnSquareVerifier Contract Address: 0x6aBa1487B4af9c67AA20CB7ee9B9D9bD80bA7847

// OLD Deployments: 0x3Da4771cA10Bb0026c2c2B50273E978AedE8Fb71, 0xC85652b857867D34c7ccc918165Bb21d6a59cfb5, 0x59937e6a845D6Db05aC8Ed2cf0F8C773bC7a29ca, 0x96EAeaa00F664ce51EbF8cB501d266D57824F316. 0xDbA019f35008C25641BD25A752F02Be49cBE8C79. 0x378cd8dD5EcEaCd87B359B5d974b7d75c439ce28
