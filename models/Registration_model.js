var mongoose = require('mongoose') 
var Schema = mongoose.Schema;


var RegSchema = new Schema({

            emailid : {

                type : String,
                required : true,
                unique : true 
            },
            name : {
                type : String,
                required : true,
            },
            password : {
                type : String,
                required : true 
            },
            age : {
                type : Number,
                required : true 
            },
            gender : {
                type : String,
                required : true 
            },
            mobile : {
                type : Number,
                required : true 
            }


},{
    timestamps : true 
})


var Regis = mongoose.model('RegRecord',RegSchema);

module.exports = Regis;