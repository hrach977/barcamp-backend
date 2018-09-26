/**
 * Created by hrachyayeghishyan on 9/25/18.
 */

function SignupService(app) {
    this.app = app;
}

SignupService.prototype = {
    constructor: SignupService,
    signUp: signUp
};

function signUp(username, email, password, options) {
    var self = this;
    // return _checkUsernameExistence.call(self, username, function(response) {
    //    // if (response.hits.hits.length > 0) {
    //     //    throw new Error('Username is taken');
    //    // } else {
    //         console.log('response of check is: ' + response);
    //        return self.app.db.create({
    //            index: 'developer',
    //            type: 'backend',
    //            body: {
    //                name: username,
    //                email: email
    //            }
    //         });
    //     //}
    // });
    // self.app.db.index({
    //     index: 'developer',
    //     type: 'backend',
    //     body: {
    //         name: username,
    //         email: email
    //     }
    // }).then(function(response) {
    //     console.log(response);
    // })


    return self.app.db.index({
       index: 'developer',
        type: 'backend',
        body: {
             name: username,
            email: email
        }
    });
}

function _checkUsernameExistence(username) {
    var self = this;
    return self.app.db.search({
        index: 'developer',
        type: 'backend',
        body: {
            query: {
                match: {
                    name: username
                }
            }
        }
    });
}

module.exports = SignupService;
