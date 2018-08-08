
// Dependencies
var express = require('express');
var router = express.Router();


// Models
var Lists = require('../models/list');
var Listm = require('../models/listm');
var Collection = require('../models/collection');
var Hists = require('../models/hist');
var Schs = require('../models/sch');



// Routes
Lists.methods(['get', 'put', 'post', 'delete']);
Lists.register(router, '/museums/list_officers');

Collection.methods(['get', 'put', 'post', 'delete']);
Collection.register(router, '/museums/collection');

Listm.methods(['get', 'put', 'post', 'delete']);
Listm.register(router, '/museums/list');

Hists.methods(['get', 'put', 'post', 'delete']);
Hists.register(router, '/museums/history');

Schs.methods(['get', 'put', 'post', 'delete']);
Schs.register(router, '/museums/schedules');



// Return router
module.exports = router;
//module.exports = router;
//module.exports = router;
//module.exports = router;
