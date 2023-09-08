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
        res.send('Data inserted to the table');
    }
     catch(err){
         console.log("Unable to insert data to the table", err);
         res.status(500).send("Unable to insert data to the table"+err);
    }
})
    

module.exports = router;