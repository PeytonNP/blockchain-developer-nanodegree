pragma solidity >=0.4.21 <0.6.0;
//pragma solidity ^0.6.4; // for generating abi using solc
import './ERC721Mintable.sol';
import './SquareVerifier.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>


// Reference https://medium.com/@andresaaap/capstone-real-estate-marketplace-project-faq-udacity-blockchain-69fe13b4c14e

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token, SquareVerifier {

    // TODO define a solutions struct that can hold an index & an address
    struct solutions {
        uint256 _index;             // what is this for
        address _addressSender;
        uint256 _tokenId;

        // Components of proof.json
        uint256[2] _proofA;         // input a to proof.json
        uint256[2][2] _proofB;      // input b to proof.json
        uint256[2] _proofC;         // input c to proof.json
        uint256[2] _proofInputs;    // input 'inputs' to proof.json
        bool _result;               // result of calling verifyTx

        bytes32 hashUniq;           // hash used for uniqueness
    }

    // TODO define an array of the above struct
    // ^^ according to https://knowledge.udacity.com/questions/36906 both are not needed

    // TODO define a mapping to store unique solutions submitted
    mapping (bytes32 => solutions) uniqSolutions;

    function getSolutionFromHash(bytes32 hashKey) public returns(bool){
        return uniqSolutions[hashKey]._result;
    }

    // TODO Create an event to emit when a solution is added
    event solutionAdded();

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolutions(uint256 index, address sender, uint256 tokenId, uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory inputs) public {
        bool calculatedResult = super.verifyTx(a, b, c, inputs);
        //require(calculatedResult, "Solution is not true"); // need to be true?
        //bytes32 calculatedHash = sha256(a, b, c, inputs, calculatedResult);
        bytes32 calculatedHash = sha256(abi.encodePacked(index, tokenId));

        solutions memory newSolution = solutions(index, sender, tokenId, a, b, c, inputs, calculatedResult, calculatedHash);
        uniqSolutions[calculatedHash] = newSolution;

        emit solutionAdded();
    }

    constructor(string memory name, string memory symbol) CustomERC721Token(name, symbol) public {

    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNewNFT(address to, uint256 tokenId, string memory tokenURI, uint256 index) public{
        //addSolutions(index, to);
        bytes32 calculatedHash = sha256(abi.encodePacked(index, tokenId));
        require(uniqSolutions[calculatedHash]._addressSender != address(0), "Solution does not have a sender therefore does not exist");

        super._mint(to, tokenId, tokenURI);
    }
}


























