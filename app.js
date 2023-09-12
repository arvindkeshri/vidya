const express = require('express');
const app = express();

const userRouter = require('./routers/userRouter')
const sequelize =  require('./util/sequelize');
const User = require ('./models/user');

app.use(express.urlencoded({extended: true}))

sequelize.sync().then(result=>{
    console.log(result);
}) 
.catch((err)=>{
    console.log(err);
})

app.use('/', userRouter);

app.listen((3000), ()=>{
    console.log("Server running ok")
});
