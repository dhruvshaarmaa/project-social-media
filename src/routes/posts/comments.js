const route=require("express").Router();
const {createComment,showAllComments,getCommentsbyPostId}=require("../../controllers/comments");

route.get("/",async (req,res)=>{
    //allComment signify allComments on a single posts
    if(req.query.allComment){
        const comments=await getCommentsbyPostId(req.query.allComment);
        res.status(200).send(comments);
    }else{
        //sending a particular post
        const comments=await showAllComments(req.query.id);
        res.status(200).send(comments);
    }

});

route.post("/",async (req,res)=>{
    const {userId,postId,body}=req.body;
    if((!userId) || (!postId) || (!body) ){
        res.send();res.status(400).send({
            error:"Need UserId, PostId, title and body to create Posts"
        });
    }
    const comment=await createComment(userId,postId,body);
    res.status(201).send(comment);
});

module.exports={
    commentsRoute:route
};