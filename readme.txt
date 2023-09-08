//when we define models we use the same sequequelize object so it knows the models and relations and can translate them to actual tables using sync method.
sequelize.sync().then(result=>{
    console.log(result);
}) 
.catch((err)=>{
    console.log(err);
})