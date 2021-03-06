// README https://github.com/ProjectOpenSea/opensea-creatures
// File https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js

/*
    TO RUN THE mint.js file:
    export OWNER_ADDRESS="0x276c1AD0C8a5BB909592D3f3781b14c6664BA90E"
    export NFT_CONTRACT_ADDRESS="0x6aBa1487B4af9c67AA20CB7ee9B9D9bD80bA7847" // address for SolInSquareVerifier
    export NETWORK="rinkeby"
    export INFURA_KEY="6a934cd373984b579efff7226b2beb35"
    export MNEMONIC="ozone fence leg flame pelican rescue rough great flight damage spatial mosquito"
    node scripts/mint.js
*/

const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const MNEMONIC = process.env.MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS
const OWNER_ADDRESS = process.env.OWNER_ADDRESS
const NETWORK = process.env.NETWORK
const NUM_CREATURES = 10
const defaultTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/"

// Note: easier to loop and read input from files 
// proofs/proof1.json
let a1 = ["0x1ba0df5159c4c75da8a30d34e28b0a2242b9634aed77c9b41b979e6081ed5033", "0x04a81e18c8c57362b000213bce6d533055ba4f830dc76abf9c5bf37907ffbdd0"];
let b1 = [["0x272c1132c59a11b904df2e3921eaf7b40ce948a1a24e9b36dd6e2e04cc3e9560", "0x1535e1e6c5cb4d685ef68595487910d68d8813765f422b977b53e32f8c53fc94"], ["0x26e8a26d9bd754c038c42bb9b5b32b91a0c1463aba53b03eb8e224f1230f853a", "0x2c080f65faca972f26229da56b338fc12d62261f8626ec42659bc1090e7a983d"]];
let c1 = ["0x08c833d09a989255fa84bd16e9b4374fbf2c59f92f8b67298771b72c03e56f7f", "0x2f85944aef8c9f217463077e0d8f85fdf5546b3b570820ade0cf9c95a3feb440"];
let inputs1 = ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof2.json
let a2 = ["0x11ceea6848d6f4bb17fbe01e2f37a7f50aa5ea4da8aa6e4e364c3202dbb35deb", "0x04991e94bc0ae3718a464aecd3c351cadb9c779d8acf9601ac87245b7a5cec76"];
let b2 = [["0x18b754e9665ee861740aa1ccb4def4ed4eb945d0f26be1dced2656004ea59111", "0x099a674ea974d7421b96a617635ac38939775ce47916487edaf5d384ddd401bf"], ["0x22450d6b21830786c87e94131fbaaf9f6eaa93e6d526a827b42b706bee7654ff", "0x022b35cca41f73cee44819184e9c0054e1553f3a31310e53581d90e526c93073"]];
let c2 = ["0x07405e6618cd88e94e44ceeade27f44d9dc362cf8f4de882b0d8905906d3daea", "0x1c8e8f412dfab3243f232fa9da9b1705bf99b05952819160d69c64ede0794fab"];
let inputs2 = ["0x0000000000000000000000000000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof3.json
let a3 = ["0x03e584e137aa2b926e3da3b38a1590fd5c2879396b21ffe3db65677d9b728909", "0x215eebe60d418ab4b465bc162419b3b4a63d6c4b72e770a38943844b3c9701ca"];
let b3 = [["0x1c1151da91c70016a9184dba27c8ef80d9514f1b886af0b33436f885679534f4", "0x10e6add0a353d4244405f5fa4c54d64ee4e6d50631ea17762cfadcd1ece74920"], ["0x121320555202a7f88b22bff7951bd6ae55b1369b370caa71568ab422e4f773b6", "0x16db928dae10a2b050ea3a9c5e65cad1f834393bbb766bb58eaddbdadd061402"]];
let c3 = ["0x24c0a6d6da8f6f6a7aa559b55d8cb91d91c1dc6107c4d29cd147e32ffff5d460", "0x02dddb0825a3acec8d9ca08b82d68a42760acdbe8e79f94126106e81ba03f4f7"];
let inputs3 = ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof4.json
let a4 = ["0x1d5f2cc6c3e464ee9c5e190b6fff14aad3002a4ba2e3637a0ecdb1ae15b72e9e", "0x01012087fbe1e8e708e34fd11d58f9378d5e074d72e135fdd7e0e204720a20d0"];
let b4 = [["0x056b1bef4cd1a69a4fd0f32f724c7c6403e5db427ca96234269119267e3945d6", "0x0c3eba894c4be4f14e087dfea24ab73e8b3a1020f9e441207716a34d416256de"], ["0x0dee185e3c5d2f77b220f582b0a69cbca5a16e8770a43e005dbb3015b7b8c853", "0x1e7dbb1369a236e709e640a010db9d15c799efd7b67c804d57f229e44ccad4b1"]];
let c4 = ["0x102eccc0225e2fa0de10b79b169c002041a64a06ab4bd9485a6750c4e65bc604", "0x28d653441db0d2efd52ce63fad1f4065cea1094db7bd71c05f910aa4421b86f0"];
let inputs4 = ["0x0000000000000000000000000000000000000000000000000000000000000010", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof5.json
let a5 = ["0x00f59df5b373e6c051f37af1acad37efb8cb0b95f79a6317f762f013211c4642", "0x2a55fdc40078c8ef9c619c2a402f3c0339fc4d0c99055df4dfdfc7622d228180"];
let b5 = [["0x20d4c55809a1c61dbdf8a8c212b15a13052101e7327e7f16f4e27e06d7aee3da", "0x124858cade6070d41c8a304537c6f048e9ab3166224818b4a9e775c07f445a83"], ["0x2a3f2c09bceb8dfe4aab96e92f7b0a5c29f2d1767f1ff16dcb985818d5e9bd06", "0x165dcf6b4665605f78f7c8c56869d710bcec2f35dbbc4d10442317ee3fa862e7"]];
let c5 = ["0x13fe29dd22aa68dec30ef3cf7ca20c691f820965da2eb0e5fcf21e780ef1a2f8", "0x159c59229a338f8db0c72ff58ff5ff67f26a895e75b5b5b71513776f56f07c95"];
let inputs5 = ["0x0000000000000000000000000000000000000000000000000000000000000019", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof6.json
let a6 = ["0x128e71ca8caf6cacbfc6ad0432c216a1bb9e1477eb357cf2ae1dac26045dd38b", "0x2df7265ce88f2bce932a952f8108d7908ab698317bb4cc9e4514adb3f7f8463f"];
let b6 = [["0x0be2711f6984844a352ff96fb9bf83bc04b4d48b3d00573781691128c2a51ca8", "0x132c525a6da94af3c5741df905c7b790fc6435124089ed45a297550150f8eafc"], ["0x2f262d9b5c131dd6eed418ffab966b2d02c8f6efc81072e1b1b3350475c8b1df", "0x0e22156bfa4b2e87e02d5cc51a5b86fce50090ce84deee15d72953975ff3e74b"]];
let c6 = ["0x11ec975d8cc5084d7086af20c698efec67581c358890da4b9efdf5590bd56497", "0x1580876c00bc2ee39da0596522ed64797d3940edbd6312d2d1be0488db809019"];
let inputs6 = ["0x0000000000000000000000000000000000000000000000000000000000000024", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof7.json
let a7 = ["0x04a2a6e21be60480803c475ef9495b4f38bc269fcba8f36dd0beb1db96f83771", "0x05b27473d37984466a4ca71c7f0138110fb8a6760afe20a2b2c2502ad986913f"];
let b7 = [["0x03606a1ba1351204c5177655271fa757198fa3b29faddd553d07a0bd02e4a273", "0x072178ce7e17e09098c3580c4deb7b7ead45cd41203b48ef890dcf7d24542466"], ["0x249cf527d7ac60d447c74faf505e5014366d7bfb10e85257d6b85d7837f10035", "0x231ce26de8685fb436bac26bc9efd6b24dbd583d7494234ccedbd53cb3fe3dc6"]];
let c7 = ["0x021105b1e6d5bdb4ec4d7057a50f2b1493fbf1543e6c024834da24594bc9012c", "0x0fa924b1d6cd00ad0de58d217cacf9838d71c8de0e92815ee0b32b423a8822ff"];
let inputs7 = ["0x0000000000000000000000000000000000000000000000000000000000000031", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof8.json
let a8 = ["0x19551c6f45a11c1ddb849322613fd4ac8ee16e75eed4462405e8408a89e84645", "0x2e56ad17e4b4c4ef29c08df779e52cb28f3a68d413fc675d9762046fe4f5455b"];
let b8 = [["0x290d72ee5bc309b988ae4ca5e725e397a264e25aed1a7ba441d8178433e290ef", "0x1a6a38c58d04bdc839b4f08f6a1a6b83488d4e5fb2a87175da000b745d1578a1"], ["0x095462df33eb01868fb509573bc6a2c93b4f437cceb2ded2688621cb2bde51e0", "0x2cecf375af9cbe9d4fd8bc3d4bc3a9a6b566605a2b0021211e598bd0be91d089"]];
let c8 = ["0x22e5b809995da6f968160f2b65232dc1be74695f0e0fb070ded3da78e31a5fde", "0x10ec0dca40b90d19096fbdd3c05e90adf60b64fd87af6a485d4c214b76426b76"];
let inputs8 =  ["0x0000000000000000000000000000000000000000000000000000000000000040", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof9.json
let a9 = ["0x15eb1362ee372176aa2d271bc17276942a2a4b67e81b16ae416bf3eaac1b7e31", "0x2a9e81b6464e0f51fee6ca3f0acc2b6365110148ce7f918109979cbed7a4ac8a"];
let b9 = [["0x0f5fe2479f04f8967c53a707684008c1076a2893248ae9576ecc7e1b95ab4826", "0x1c88e796e92438091c96207ab2f11d5113afcf1c76e482c4fe74a9103ffb767b"], ["0x04580dee551692ec698c73d9cca1de364f451578322dc121bec78bf664441043", "0x137a13a20de25ceeb4079f8b4f5552e101879e54bed8910e9be9a4904dec50a8"]];
let c9 = ["0x287ebe5474c6855fb1d7e5e64cad9200b685b4a0d4a387adcaa1937190dbb16c", "0x29edac58c832d5e22ca092f36fb67f842c15b96a081c9813cf7a335326fec23f"];
let inputs9 = ["0x0000000000000000000000000000000000000000000000000000000000000051", "0x0000000000000000000000000000000000000000000000000000000000000001"];

// proofs/proof10.json
let a10 = ["0x271fa496ef9adfa3d7cda1f3c7376df9a136e767f5e687c6ac9b0cf0543bbb04", "0x1a1cf8d74af3f25a251f926300f678ce3bd1a67aedb4d81d8d30dee4c0346774"];
let b10 = [["0x06f6425affd6076055997965625f4e0e6ec63454fa455b8bff6da90414bd705d", "0x0563ed346d5a35ad2c0d8c89c07364d5c5e376b7f4d2d3ec370aef2ae38096bb"], ["0x138872dc3d3b6ebcf8b0b789f2c47c5e4364a9f74d65eb440ec1cd06f82f72c5", "0x2dfb6214774254a840d38d3f276dcb20257febff754f5ed9453b7695c13dfb5c"]];
let c10 = ["0x0422eba2cd789233ba5b0d547df96365acf9a89a5bf670344ea9b4e1a2c83739", "0x0039bf22968bdd25c488d57be673bba2b43c652fc2f3ec1a741e4234348b5c9f"];
let inputs10 = ["0x0000000000000000000000000000000000000000000000000000000000000064", "0x0000000000000000000000000000000000000000000000000000000000000001"];


if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

const NFT_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "triggerAddress",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "triggerAddress",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "s",
          "type": "string"
        }
      ],
      "name": "Verified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "ownerShip",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "solutionAdded",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "_mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBaseTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSymbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bool",
          "name": "pausedVar",
          "type": "bool"
        }
      ],
      "name": "setPaused",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "verifyTx",
      "outputs": [
        {
          "internalType": "bool",
          "name": "r",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "hashKey",
          "type": "bytes32"
        }
      ],
      "name": "getSolutionFromHash",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "inputs",
          "type": "uint256[2]"
        }
      ],
      "name": "addSolutions",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "inputs",
          "type": "uint256[2]"
        }
      ],
      "name": "mintNewNFT",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]


async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
    const web3Instance = new web3(
        provider
    )

    if (NFT_CONTRACT_ADDRESS) {
        const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" })

        // Using a single proof
        for (var i = 1; i <= 10; i++) {
            try {
                const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a1, b1, c1, inputs1).send({ from: OWNER_ADDRESS });
                console.log("minted token-" + i + ":"+ result);
                //process.exit(1);
            } catch(error) {
                console.log("Could not mint token in loop. Error: " + error);
                process.exit(-1);
            }
        }
        process.exit(1);

        // mint token using proof 1
        /*try {
            let i = 1;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a1, b1, c1, inputs1).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token1. Error: " + error);
            process.exit(-1);
        }

        // mint token using proof 2
        try {
            let i = 2;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a2, b2, c2, inputs2).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token2. Error: " + error);
            process.exit(-1);
        }

        // mint token using proof 3
        try {
            let i = 3;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a3, b3, c3, inputs3).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token3. Error: " + error);
            process.exit(-1);
        }

        // mint token using proof 4
        try {
            let i = 4;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a4, b4, c4, inputs4).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token4. Error: " + error);
            process.exit(-1);
        }        
        
        // mint token using proof 5
        try {
            let i = 5;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a5, b5, c5, inputs5).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token5. Error: " + error);
            process.exit(-1);
        }

        // mint token using proof 6
        try {
            let i = 6;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a6, b6, c6, inputs6).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token7. Error: " + error);
            process.exit(-1);
        }

        // mint token using proof 7
        try {
            let i = 7;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a7, b7, c7, inputs7).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token7. Error: " + error);
            process.exit(-1);
        }

        // mint token using proof 8
        try {
            let i = 8;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a8, b8, c8, inputs8).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token8. Error: " + error);
            process.exit(-1);
        }

        // mint token using proof 9
        try {
            let i = 9;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a9, b9, c9, inputs9).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token9. Error: " + error);
            process.exit(-1);
        }        
        
        // mint token using proof 10
        try {
            let i = 10;
            const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a10, b10, c10, inputs10).send({ from: OWNER_ADDRESS });
            console.log("minted token-" + i + ":"+ result);
            //process.exit(1);
        } catch(error) {
            console.log("Could not mint token10. Error: " + error);
            process.exit(-1);
        } */       

        /*
        for (var i = 100; i < 111; i++) {
            //const result = await nftContract.methods.mintTo(OWNER_ADDRESS).send({ from: OWNER_ADDRESS });
            // default uri https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/
            // function mintNewNFT(address to, uint256 tokenId, string memory tokenURI, uint256 index) public{
            //console.log(nftContract.methods)
            try {
                //     function mintNewNFT(address to, uint256 tokenId, string memory tokenURI, uint256 index, uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory inputs) public{
                const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i, a2, b2, c2, inputs2).send({ from: OWNER_ADDRESS });
                //const result = await nftContract.methods.mintTo(OWNER_ADDRESS, i, defaultTokenURI, i, a, b, c, inputs).send({ from: OWNER_ADDRESS });
                console.log("minted tokens: " + result);
                process.exit(1)
                //const result = await nftContract.methods.mintNewNFT(OWNER_ADDRESS, i, defaultTokenURI, i).send({from: OWNER_ADDRESS});
            } catch(error) {
                console.log('Could not mint token')
                console.error(error)
                process.exit(1)
            }
            
            console.log("Minted creature. Transaction: " + result.transactionHash)
        }*/

    } 
}

main()