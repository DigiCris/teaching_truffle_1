const Tokenjson = artifacts.require('ERC20');
const expect = require('chai').expect;


contract("test js", accounts => {

    [alice, bob, owner]= accounts;

    before( async () => {
        Token = await Tokenjson.new('German', 'GMN', '18', '10000',{from:owner});
    });

    describe("constructor",async ()=>{
        it("name = German", async ()=>{
            const res= await Token.name();
            expect(res).to.equal("German");
        });
        it("balance owner 10000", async ()=>{
            const res= await Token.balanceOf(owner);
            const res2='10000000000000000000000';
            expect(res.toString()).to.eql(res2);
        });
    });

    describe("transfer",async ()=>{
        it("transfer success", async ()=>{
            const res= await Token.transfer(bob, '5000000000000000000000',{from:owner});
            const res2= (await Token.balanceOf(owner)).toString();
            expect(res2).to.equal('5000000000000000000000');
        });
        it("transfer failed", async ()=>{
            try {
                const res= await Token.transfer(bob, '50000000000000000000000',{from:owner});
                expect("transfer failed").to.equal('No debí entrar aca');                
            } catch (error) {
                console.log(error.hijackedStack);
                expect(error.hijackedStack).to.include('revert');
            }

        });
    });    
});