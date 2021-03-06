//db connections and models -Table definition
const Sequelize=require("sequelize");
//to use postgres db in my heroku
let db;

if(process.env.NODE_ENV=="testing"){
    db=new Sequelize({
        dialect:"sqlite",
        storage:":memory:"
    });
}else if(process.env.DATABASE_URL){
    db=new Sequelize(process.env.DATABASE_URL);
}else{
    db=new Sequelize({
        dialect:"sqlite",
        storage:__dirname+"/database"
    });
}

const COL_ID_DEF={
    type:Sequelize.DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
}
const COL_USERNAME_DEF={
    type:Sequelize.DataTypes.STRING(30),
    allowNull:false
}
const COL_TITLE_DEF={
    type:Sequelize.DataTypes.STRING(140),
    allowNull:false
}

const Users=db.define("user",{
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
});

const Posts=db.define("post",{
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body:{
        type: Sequelize.DataTypes.TEXT,
        allowNull:false
    } 
});

const Comments=db.define("comment",{
    id: COL_ID_DEF,
    body:{
        type: Sequelize.DataTypes.TEXT("tiny")
    }
});
//associations
Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);//foreign key in comments(primary key)
//from posts and from users

module.exports={
    db,
    Users,
    Posts,
    Comments
}
