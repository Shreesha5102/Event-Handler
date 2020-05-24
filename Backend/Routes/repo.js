const express = require('express');
const router = express.Router();
const repo1 = require('../Models/userdb');
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
      res.json(reppo[0]);
    }catch(err){
        res.json({message:err});
    }
});


router.post('/:username', uploads.single('certificate'), async (req,res) => {
    console.log(req.body);
    const repo = {
        title: req.body.title,
        venue: req.body.venue,
        date: req.body.date,
        certificate: req.file.path
        };
   try{
        console.log("Posted");
        const user_name = req.params.username;
        //Finding the User
        var updateEvents = await repo1.findOne( {username: user_name} );
        //updating Events Array
        updateEvents.events.push( repo );
        //Saving the Updated Array
        const savedrepo = await updateEvents.save();
        //Sending Events Array as response
        res.json(savedrepo.events);
   }catch(err){
       console.log("In catch");
       res.json({message: err});
   }
});
router.get('/:postId',async (req,res)=>{
    try{
        const post= await repo1.findOne({ "_id":req.params.postId});
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
    

 });
router.delete('/:postId/:eventId',async (req,res)=>{
    try{
        const removedpost = await repo1.findById( req.params.postId);
        removedpost.events.pull(req.params.eventId);
        removedpost.save(function (err) {
            if (err) return console.log(err);
            console.log('Deleted');
          });
        res.send("Deleted");
    } catch (err) {
        res.json({ message: err});
    }
    

 });
 router.patch('/:postId/:eventId', uploads.single('certificate'), async (req,res)=>{
    try{
        console.log(req.body);

        const updatedPost= await repo1.updateOne({ "_id": req.params.postId, "events._id": req.params.eventId},
            { $set: 
                {
                    "events.$.title": req.body.title,
                    "events.$.venue": req.body.venue,
                    "events.$.date": req.body.date
                }
            }
            );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err});
    }
    

 });
module.exports=router;