const express = require('express');
const router = express.Router();
const repo1 = require('../Models/repo1');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname );
    }
});
const uploads = multer( {
    storage: storage
} );

router.get('/', async (req,res) => {
try{
    console.log("Entries in DB")
    const reppo = await repo1.find();
      res.json(reppo);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/', uploads.single('certificate'), async (req,res) => {
    console.log(req.body);
    const repo = new repo1({
        title: req.body.title,
        venue: req.body.venue,
        date: req.body.date,
        certificate: req.file.path
        });
   try{
        console.log("Posted");
        const savedrepo = await repo.save();
        res.json(savedrepo);
        console.log(savedrepo);
   }catch(err){
       res.json({message: err});
   }
});
router.get('/:postId',async (req,res)=>{
    try{
        const post= await repo1.findById({ _id: req.params.postId});
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
    

 });
router.delete('/:postId',async (req,res)=>{
    try{
        const removedPost= await repo1.remove({ _id: req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err});
    }
    

 });
 router.patch('/:postId',async (req,res)=>{
    try{
        const updatedPost= await repo1.updateOne({ _id: req.params.postId},
            { $set: {title: req.body.title}}
            );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err});
    }
    

 });
module.exports=router;