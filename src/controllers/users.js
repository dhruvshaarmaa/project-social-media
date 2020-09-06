//importing my table object Users
const {Users}=require("../db/models");
const {generateRandomUsername}=require("../utils/username");

async function createAnonuser() {
    //creating a new user in Database
    //user: id ,username
    const user=await Users.create({
        username:generateRandomUsername()
    });

    return user;
}
async function getUserbyUsername(username){
    return await Users.findOne({
        where:{
            username
        }
    });
}
async function getUserbyId(id){

    if(NaN(id)) throw new Error("User Id should be an Integer");
    return await Users.findOne({
            where :{
                 id
            }
        });
}
module.exports={
    createAnonuser,
    getUserbyUsername,
    getUserbyId
}