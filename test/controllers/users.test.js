//assertion libarary
const {expect}=require("chai");
const {
    createAnonuser,
    getUserbyId,
    getUserbyUsername
}=require("../../src/controllers/users");

describe("controllers/users",()=>{
    let createdUser=null;
    
    it("User should be created",async ()=>{
        createdUser=await createAnonuser();
        expect(createdUser).to.have.property("username");
        expect(createdUser.id).to.be.a("number");
    });

    it("User found by userID",async ()=>{
        let foundUser=await getUserbyId(createdUser.id);
        expect(foundUser.username).to.equal(createdUser.username);
    });

    it("User found by userName",async ()=>{
        let foundUser=await getUserbyUsername(createdUser.username);
        expect(foundUser.id).to.equal(createdUser.id);
    });
});