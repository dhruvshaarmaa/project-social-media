const {Users,Posts,Comments}=require("../db/models");

async function createComment(userId,postId,body){
    
    const comment=await Comments.create({
        body,
        userId,
        postId
    });
    return comment;
}
async function getCommentsbyPostId(query){
    const comments=await Comments.findAll({
        where: {
            postId:query
        },
        include:[Users,Posts]
    });
    return comments; 
}
async function showAllComments(query){
    //console.log("PostID:",query);
    if(query){
        const posts=await Posts.findAll({
            where:{
                id: query
            },
            include:[Users]
        });
        return posts;
    }
    const comments=await Comments.findAll({
        include:[Users,Posts]
    });
    return comments;
}
module.exports={
    createComment,
    showAllComments,
    getCommentsbyPostId
}