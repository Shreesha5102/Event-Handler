const express=require("express");
const app= express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors");
mongoose.connect("mongodb://localhost:27017/teacher",{useNewUrlParser:true}, (err)=>{
    if(!err){console.log('MongoDB Connection succeeded.');}
    else{console.log('Error in Connection:' + err);}
});


app.use(cors());
app.use(bodyParser.json());

const repoRoutes= require('./Routes/repo');
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});
app.use('/repo', repoRoutes);
 

app.listen(4000);
