const express=require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const repoRoutes = require('./Routes/repo');
const userRoutes = require('./Routes/user');


mongoose.connect("mongodb://localhost:27017/teacher",{useNewUrlParser:true}, (err)=>{
    if(!err){console.log('MongoDB Connection succeeded.');}
    else{console.log('Error in Connection:' + err);}
});


app.use(cors());//cors is used to allow cross-origin-access
app.use(bodyParser.json());


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/uploads', express.static('uploads'));
app.use('/profilePicture', express.static('profilePicture'));
//User Db 
app.use('/repo', repoRoutes);
//User details
app.use('/user', userRoutes);
 

app.listen(4000);
