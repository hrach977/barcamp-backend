/**
 * Created by hrachyayeghishyan on 9/25/18.
 */
var express = require('express');

var app = express();
app.listen(3000);

require('./controllers/api')(app);
require('./db-client')(app);