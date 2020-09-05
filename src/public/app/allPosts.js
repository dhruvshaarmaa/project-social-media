//function for getting all Posts from back-end
function loadPosts(){
    $.get("/api/posts",{},(posts)=>{
        for(let p of posts){
            $("#post-container").append(`
            <div class="col-4">
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">${p.body}</p>
                  <a href="#" class="card-link">Like</a>
                  <a href="#" id="${p.id}" class="comments">Comment</a>
                </div>
              </div>
        </div>
            `
        );
        }
        //on clicking a tab that event attribute is picked and 
        //content is loaded acc to that tab
        console.log($(".card .comments"))
        $(".card .comments").click((ev)=>{
            window.postId=$(ev.target).attr("id");
            $("#content").load("/components/comments.html");
        });
    });
}
