const route=require("express").Router();
const {
    showAllPosts,
    createNewPost
    }=require("../../controllers/posts");

route.get("/",async (req,res)=>{
    //get request search in query
    //console.log("req.body.UserID",req.query.userId)
    const posts=await showAllPosts(req.query.userId);

    res.status(200).send(posts);
});
route.post("/",async (req,res)=>{
    const { userId, title, body }=req.body;
    console.log(userId,title,body);
    if((!userId) || (!title) || (!body)){
        res.status(400).send({
            error:"Need UserId, title and body to create Posts"
        });
    }
    
    const post=await createNewPost(userId,title,body);
    res.status(201).send(post);
});

module.exports={
    postsRoute:route
};