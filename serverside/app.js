const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const Camper = require('./models/camper')
mongoose.connect('mongodb://localhost:27017/Camper', { useNewUrlParser: true })
    .then(() => {console.log("connected")})
    .catch(() => {console.log("error connecting")});
// use the following code on a ny request that matches the specified mount path
app.use((req, res, next) =>{
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin','*')
    // can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); 
    //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept'); 
    next();
});

app.get('/campers', (req, res, next) => {
    // const campers = [
    //     {"firstName" : "Sam" , "lastName" : "Jackson" , "emergencyContact" : "Jackson Hole" , "campground" : "24-B"},
    // ];
    
    // //send the array response
    // res.json(campers)
    Camper.find()
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log('Error: ${err}');
        res.status(500).json(err);
        });
});
//parse application/x-www/form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
////parse application/json
app.use(bodyParser.json())
//////serve incoming post requests to /students
app.post('/campers', (req, res, next) => {
    const camper = new Camper({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emergencyContact: req.body.emergencyContact,
        campground: req.body.campground
    });
    camper.save()
        .then(() => {console.log('Success');})
        .catch(err => {console.lost('Error:' + err);});
});

app.delete("/campers/:id", (req, res, next) => {
    Camper.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!")
    });
});

// serve incoming put requests to /campers
app.put('/campers/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      Camper.findOneAndUpdate({_id: req.params.id},
        {$set:{firstName : req.body.firstName,
          lastName : req.body.lastName,
          emergencyContact: req.body.emergencyContact,
          campground: req.body.campground}},{new:true}) 
       .then((camper) => {
          if (camper) { //what was updated
            console.log(camper);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err);
       });
   } else {
     console.log("please provide correct id");
   }
    
  });  




//to use this middleware in other parts of the application
module.exports=app;