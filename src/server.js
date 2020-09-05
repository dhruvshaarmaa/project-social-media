const express=require("express");
const {db}=require("./db/models");
const app=express();
const port=process.env.PORT || 4040;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {usersRoute}=require("./routes/users");
const {postsRoute}=require("./routes/posts");
const {commentsRoute}=require("./routes/posts/comments");

app.use("/api/users",usersRoute);
app.use("/api/posts",postsRoute);
app.use("/api/comments",commentsRoute);
app.use("/",express.static(__dirname+"/public"));

db.sync()
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server started on http://localhost:${port}`);
        });
    })
    .catch((err)=>{
        console.error(err);
    })