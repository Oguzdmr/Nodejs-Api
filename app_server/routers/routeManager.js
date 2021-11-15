var routeLogin = require('./loginRouters');
var routeHome = require('./homeRouter');

module.exports = function(app){
    app.use('/login',routeLogin);
    app.use('/home',routeHome);
}