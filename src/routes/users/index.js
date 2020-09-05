const route=require("express").Router();
//using my functions from controllers to create and get users from database on 
//getting request to server
const { getUserbyUsername,
        getUserbyId,
        createAnonuser
    }=require("../../controllers/users");

route.get("/:id",async (req,res)=>{
    let user;
    if(isNaN(parseInt(req.params.id))){
        //async function is called using await keyword
        user=await getUserbyUsername(req.params.id)
    }else{
        user= await getUserbyId(req.params.id);
    }
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send({
            error:"No such User Exists."
        })
    }
});

route.post("/",async (req,res)=>{
    const user=await createAnonuser();
    res.status(201).send(user);
});
module.exports={
    usersRoute:route
};