
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var histSchema = new mongoose.Schema({
    official_name: String,
    established: String,
    established_by: String,
    architect:String,
    area:String,
    notable_collections:String,
    about:String,
    
});

// Return model
module.exports = restful.model('Hists', histSchema);
