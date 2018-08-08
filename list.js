
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var listSchema = new mongoose.Schema({
    
     name:String,
     position:String,
     Office: String,
     email:String,
     phone_office:String,
     phone_res:String,
     mobile:String ,
     Salary: String,
     NID:String,
     dateOfJoin:String
              

});

// Return model
module.exports = restful.model('Lists', listSchema);
