/**
 * Created by hrachyayeghishyan on 9/25/18.
 */
var SignupService = require('./../modules/users-service/signup-service');


module.exports = function(app) {

    var signupService = new SignupService(app);


    app.get('/test', function(req, res, next) {
       res.send({
          status: "success",
          message: "working"
       });
    });

    app.get('/elastic', function(req, res, next) {
       console.log('inside the ednpoint');
       app.db.search({
           index: 'developer',
           type: 'backend',
           body: {
               query: {
                   match_all: {}
               }
           }
       }).then(function(resp) {
           var hits = resp.hits.hits;
           res.send(hits);
       });
    });

    app.post('/signup', function(req, res, next) {
        // console.log(req.body);
        // console.log(req.body.username);
        // console.log(req.body.email);
        signupService.signUp(req.body.username, req.body.email).then(function(response) {
            console.log('response: ' + response);
            res.send(response);
        });
    });
}