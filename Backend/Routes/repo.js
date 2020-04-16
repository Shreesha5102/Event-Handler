const express = require('express');
const router =express.Router();
const repo1= require('../Models/repo1');

router.get('/', async (req,res) => {
try{
    console.log("Entries in DB")
    const reppo = await repo1.find();
      console.log(reppo);
      res.json(reppo);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {
    const repo = new repo1({
        title: req.body.title[0],
        venue: req.body.venue[0],
        date: req.body.date[0],
        
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