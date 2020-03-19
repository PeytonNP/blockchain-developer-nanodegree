var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

// Test if a new solution can be added for contract - SolnSquareVerifier
// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];    // owner
    const account_two = accounts[1];
    const account_three = accounts[2];
    let index = 1;
    let token1 = 1;
    let token2 = 2;
    let token3 = 3;
    let token4 = 4;
    let token5 = 5;

    let a = ["0x1ba0df5159c4c75da8a30d34e28b0a2242b9634aed77c9b41b979e6081ed5033", "0x04a81e18c8c57362b000213bce6d533055ba4f830dc76abf9c5bf37907ffbdd0"];
    let b = [["0x272c1132c59a11b904df2e3921eaf7b40ce948a1a24e9b36dd6e2e04cc3e9560", "0x1535e1e6c5cb4d685ef68595487910d68d8813765f422b977b53e32f8c53fc94"], ["0x26e8a26d9bd754c038c42bb9b5b32b91a0c1463aba53b03eb8e224f1230f853a", "0x2c080f65faca972f26229da56b338fc12d62261f8626ec42659bc1090e7a983d"]];
    let c = ["0x08c833d09a989255fa84bd16e9b4374fbf2c59f92f8b67298771b72c03e56f7f", "0x2f85944aef8c9f217463077e0d8f85fdf5546b3b570820ade0cf9c95a3feb440"];
    let inputs = ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"];

    describe('Test if a new solution can be added for contract - SolnSquareVerifier', function () {
        beforeEach(async function () { 
            this.contract = await SolnSquareVerifier.new("SampleName", "SampleSymbol", {from: account_one});
        })

        it('should add new solutions', async function () {
            //addSolutions(uint256 index, address sender, uint256 tokenId, uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory inputs)
            //sha256(abi.encodePacked(index, tokenId));
            /*
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
            */

            try {
                this.contract.addSolutions(index, account_one, token1, a, b, c, inputs);
            } catch (error) {
                assert.equal(false, true); // false
            }
        })

    });

    describe('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', function () {
        beforeEach(async function () { 
            this.contract = await SolnSquareVerifier.new("SampleName", "SampleSymbol", {from: account_one});
        })

        it('should test if ERC721 token can be minted', async function () {
            try {
                this.contract._mint(account_one, token1, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1");
            } catch (error) {
                assert.equal(false, true);
            }    
        })
    });
})