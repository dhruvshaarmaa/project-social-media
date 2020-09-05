const {Users,Posts}=require("../db/models");
//functions to handle db request from api to models
async function createNewPost(userId,title,body){
    const post=await Posts.create({
        title,
        body,
        userId
    });
    return post;
}

async function showAllPosts(query){
    //console.log("UserID:",query);
    if(query){
        const posts=await Posts.findAll({
            where:{
                userId: query
            },
            include:[Users]
        });
        return posts;
    }

    const posts=await Posts.findAll({
        include: [Users]
    });
    //arrays of objects having posts
    return posts;
}
module.exports={
    createNewPost,
    showAllPosts,
}