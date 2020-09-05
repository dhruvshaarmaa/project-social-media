function getPostbyId(id){
    task(id);
}
function loadComments(allComment){
    task2(allComment);
}
function postComment(userId,postId,body){
    task3(userId,postId,body);
}
async function task(id){
    await $.get("/api/comments",{id},(posts)=>{
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
async function task2(allComment){
    console.log(allComment);
    await $.get("/api/comments",{allComment},(comments)=>{
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
async function task3(userId,postId,body){
    await $.post("/api/comments",{userId,postId,body},()=>{
            
    });
}

    
    
    