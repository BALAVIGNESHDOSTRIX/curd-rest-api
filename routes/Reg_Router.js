var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var regRouter = express.Router();
var RegRecord = require('../models/Registration_model');


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : false}));


regRouter.get('/GetRec',(req,res) => {

    var email = req.query.emailid;
    console.log(email)
    RegRecord.find({emailid : email}).then(c => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(c);
    }).catch(err => {

            res.json("The record could not find");
    })
})


regRouter.post('/regis',(req,res) => {

                var email = req.body.emailid;
                var nam = req.body.name;
                var pass = req.body.password;
                var age_t = req.body.age;
                var gen = req.body.gender;
                var mob = req.body.mobile;


                var record = new RegRecord({

                        emailid : email,
                        name : nam,
                        password : pass,
                        age : age_t,
                        gender : gen,
                        mobile : mob
                })

                record.save().then(c => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json("Registered successfully");
                        console.log(c);
                }).catch(err => {
                        res.statusCode = 403;
                        res.setHeader('Content-Type', 'application/json');
                        res.json("Error accoured");
                        console.log(err);
                })
})


regRouter.put('/updatePass',(req,res) => {

            var email = req.body.emailid;

          //  console.log(email);

            var pass = req.body.password
            var mob =  req.body.mobile

        RegRecord.findOneAndUpdate({emailid : email},{$set:{

                
                    
                password : pass,
                mobile : mob 
        }}).then(c => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json("updated successfully");
        console.log(c);
        }).catch(err => {
            res.statusCode = 403;
            res.setHeader('Content-Type', 'application/json');
            res.json("Cant update")
            console.log(err)
        })

           
             
})

regRouter.delete('/deleRec',(req,res) => {

            var email = req.body.emailid;

            RegRecord.findOneAndRemove({emailid : email}).then(c => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json("deleted successfully");
                console.log(c);
            }).catch(err => {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'application/json');
                    res.json("Cant delete the record")
            })
})



module.exports = regRouter;

