//var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];    // owner
    const account_two = accounts[1];
    const account_three = accounts[2];
    let token1 = 1;
    let token2 = 2;
    let token3 = 3;
    let token4 = 4;
    let token5 = 5;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            this.contract._mint(account_two, token1, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1");
            this.contract._mint(account_two, token2, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2");
            this.contract._mint(account_two, token3, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3");
        })

        it('should return total supply', async function () { 
            assert.equal(await this.contract.totalSupply(), 3);
        })

        it('should get token balance', async function () { 
            assert.equal(await this.contract.balanceOf(account_two), 3);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            assert.equal(await this.contract.tokenURI(token1), "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1");
            assert.equal(await this.contract.tokenURI(token2), "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2");
            assert.equal(await this.contract.tokenURI(token3), "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3");
        })

        it('should transfer token from one owner to another', async function () {
            this.contract._mint(account_one, token5, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/5");
            await this.contract.transferFrom(account_one, account_two, token5);
            assert.equal(await this.contract.ownerOf(token5), account_two);
            //await this.contract.approve(account_one, token1);
            //await this.contract.transferFrom(account_one, account_two, token1);
            //await this.contract.safeTransferFrom(account_two, account_three, token1);
            //assert.equal(await this.contract.ownerOf(token1), account_three);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
            try {
                this.notOwnerContract = await ERC721MintableComplete.new({from: account_two});
                this.contract._mint(account_three, token4, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/4");
                assert.fail("Should fail when minting when address is not contract owner");
            }
            catch (error) {
            }

        })

        it('should return contract owner', async function () { 
            assert.equal(await this.contract.getOwner(), account_one);
        })

    });
})