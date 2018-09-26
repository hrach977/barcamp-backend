/**
 * Created by hrachyayeghishyan on 9/25/18.
 */
var express = require('express');

//var bodyParser = require('body-parser');

var app = express();
app.use(express.json());

//app.use(bodyParser);

app.listen(3000);

require('./controllers/api')(app);
require('./db-client')(app);
//require('./modules/users-service/signup-service')(app);