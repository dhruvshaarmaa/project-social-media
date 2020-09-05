function getPostbyId(id){
    $.get("/api/comments",{id},(posts)=>{
        for(let p of posts){
            $("#currentPost").append(`
            
            <div class="col-4">
            <div class="card " style="width: 50rem;">
            <div id="postCard" class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
            <p class="card-text">${p.body}</p>
            </div>
            </div>
            `
            );
        }
    });
}
function loadComments(allComment){
    console.log(allComment);
    $.get("/api/comments",{allComment},(comments)=>{
        $("#ulList").empty();
        for(let c of comments){
            $("#ulList").append(
                `
                <li class="list-group-item">
                <div>${c.user.username}</div>
                <div>${c.body}</div>
                </li>
                `
                );
            }
        });
}
function postComment(userId,postId,body){
    return new Promise((res,rej)=>{
        $.post("/api/comments",{userId,postId,body},()=>{
            loadComments(postId);
        });
        res();
    });
    
}
