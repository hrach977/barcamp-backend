/**
 * Created by hrachyayeghishyan on 9/25/18.
 */


module.exports = function(app) {
    app.get('/test', function(req, res) {
       res.send({
          status: "success",
          message: "working"
       });
    });

    app.get('/elastic', function(req, res) {
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
}