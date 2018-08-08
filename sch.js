
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var schSchema = new mongoose.Schema({
    address:String,
    open_time: String,
    lunch_break: String,
    closed_time: String,
    visiting_days:String,
    upcoming_events:String,
    upcoming_events_date:String,
    upcoming_workshop:String,
    upcoming_workshop_date:String,
    ticket_price:String

});

// Return model
module.exports = restful.model('Schs', schSchema);
