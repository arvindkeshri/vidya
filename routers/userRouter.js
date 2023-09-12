const express = require('express');
const Student = require('../models/user');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    const htmlPath = path.join(__dirname, '..', 'views', 'form.html'); 
    res.sendFile(htmlPath);
})

router.post('/', async(req, res)=>{
    console.log(req.body);
    try{
        const {name, email, number} = req.body;
        const newStudent = await Student.create({name, email, number});
        //res.send('Data inserted to the table');
        res.redirect('/');
    }
     catch(err){
         console.log("Unable to insert data to the table", err);
         res.status(500).send("Unable to insert data to the table"+err);
    }
})

router.get('/users', async(req, res)=>{
    try{
        const users = await Student.findAll();
        res.json(users);
    }catch(err){
        console.log('Error retrieving data:', err)
    }
})
    
router.get('/users/:id', async(req, res)=>{
    try{
        const uid = req.params.id;
        //const user = await Student.findOne({where:{id:uid}});
        const user = await Student.findByPk(uid);
        if(user)res.json(user);
        else res.json('User not found');
    }catch(err){
        console.log('Error retrieving the user');
    }
})

router.delete('/users/:id', async(req, res)=>{
    try{
        const uid = req.params.id;
        const user =await Student.findByPk(uid);
        if(user){
            await user.destroy();
            res.json('user deleted');
        }
        else res.json('User not found');
    }catch(err){
        res.json('Error deleting user:', err)
    }
})

router.put('/users/:id', async(req, res)=>{
    try{
        const uid = req.params.id;
        const {name, email, number} = req.body;
        const user =await Student.findByPk(uid);
        if(user){
            //update the student record with the new data 
            user.name = name;
            user.email = email;
            user.number = number;
            await user.save();
            //res.json(user);
            res.redirect('/')

        }else {
            return res.json('User not found');
        }

    }catch(err){
        res.json('Unable to update user:', err)
    }
})



module.exports = router;