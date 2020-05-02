const express = require('express');
const router = express.Router();
const userdetails = require('../Models/userdb');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './profilePicture/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const uploads = multer({
    storage: storage
});

router.get("/:username", async (req,res) =>{
    const user_name = req.params.username; 
    try{
        const user = await userdetails.findOne( { username: user_name} );
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
});

router.post("/", uploads.single('profile_pic'), async (req,res) =>{
    const user = new userdetails({
        username: req.body.username,
        designation: req.body.designation,
        emp_id: req.body.emp_id,
        date_of_joining: req.body.date_of_joining,
        course: req.body.course,
        profile_pic: req.file.path
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;