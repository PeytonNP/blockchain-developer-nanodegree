var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];    // owner
    const account_two = accounts[1];
    const account_three = accounts[2];
    let token1 = 1;
    let token2 = 2;
    let token3 = 3;
    let token4 = 4;
    let token5 = 5;

    describe('Test if a new solution can be added for contract - SolnSquareVerifier', function () {
        beforeEach(async function () { 
            this.contract = await SolnSquareVerifier.new({from: account_one});
        })

        it('should add new solutions', async function () {
            this.contract.addSolutions(token1, account_two);
            assert.equal(this.contract.getUniqSolution(account_two), token1);
        })

    });

    describe('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', function () {
        beforeEach(async function () { 
            this.contract = await SolnSquareVerifier.new({from: account_one});
        })

        it('should test if ERC721 token can be minted', async function () {
            this.contract.mintNewNFT(account_three, token2, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", token2);
            assert.equal(this.contract.getUniqSolution(account_three), token2);
        })
    });
})