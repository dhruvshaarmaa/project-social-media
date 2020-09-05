$(()=>{

    //loading my navigation bar into my index.html
    //then calling loginIfNeeded function
    $("#navBar").load("/components/nav-bar.html",loginIfNeeded);
    $("#footer").load("/components/footer.html");
    $("#content").load("/components/allPosts.html");
    $(window).on("unload",()=>{
        // Clear the local storage
        window.localStorage.clear();
    });
    
});
function loginIfNeeded(){
    window.currentUser=window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser ){
        $.post("/api/users",{},(user)=>{
            if(user){
                console.log("Loggged in as",user.username);
                window.localStorage.user=JSON.stringify(user);
                currentUser=user;
                $("#nav-username").text(currentUser.username);
            }
        });
    }else{
        console.log("Resuming as",currentUser.username);
        $("#nav-username").text(currentUser.username);
    }
}


