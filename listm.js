
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var listmSchema = new mongoose.Schema({
    name: String,
    adress: String,
    

});

// Return model
module.exports = restful.model('Listm', listmSchema);
