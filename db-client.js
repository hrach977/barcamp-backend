/**
 * Created by hrachyayeghishyan on 9/25/18.
 */
var elasticsearch = require('elasticsearch');

module.exports = function (app) {
    var client = elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
    });
    // var dbClient = client;
    // dbClient.on('error', function() {
    //     console.log('connection error');
    // });
    // dbClient.once('open', function() {
    //    console.log('connected to elastic');
    // });

    //app.db = dbClient;
    app.db = client;
}


