function writePost(userId, title, body){
    $.post("/api/posts",{userId, title, body},(post)=>{
        console.log(post);
        $("#content").load("/components/allPosts.html");
    });
}