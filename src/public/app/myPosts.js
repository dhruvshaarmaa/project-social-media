//function for getting all Posts from back-end for a particular user
function myPosts(userId){
    //userId in query params for get request
    $.get("/api/posts",{userId},(posts)=>{
        for(let p of posts){
            $("#myPost-container").append(`
            <div class="col-4">
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">${p.body}</p>
                  <a href="#" class="card-link">Like</a>
                  <a href="#" class="card-link">Comment</a>
                </div>
              </div>
        </div>
            `
        );
        }
    });
}