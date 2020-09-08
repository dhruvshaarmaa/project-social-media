//makes a dummy DB
process.env.NODE_ENV="testing";

const {db}=require("../src/db/models");

const chai=require("chai");
//chai has an extension chai-as-promised to test errors as well
chai.use(require("chai-as-promised"));

before(async ()=>{
    await db.sync();
});