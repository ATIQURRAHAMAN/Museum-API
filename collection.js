
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var collectionSchema = new mongoose.Schema({
    product_name:String,
    product_no:String,
    product_type:String,
    product_origin:String,
    origin_address:String,
    origin_mobile_no:String,
    product_background:String,
    submission_date:String
    

});

// Return model
module.exports = restful.model('Collection', collectionSchema);
