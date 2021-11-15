var User = require('../models/user');

module.exports.index = function(req, res){
    res.render('login');
}
module.exports.indexPost = function(req, res){
    console.log(req.body);
    res.render('login',{
        username: req.body.username,
        password: req.body.password
    });
}
module.exports.signupGet = function(req,res){
    res.render('signup');
}
module.exports.signupPost = function(req,res){
    console.log(req.body);
    var newUser = new User({
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log('error var '+ err);
            res.render('signup');
        }else{
            console.log('Has been saved');
            res.render('login');
        }
    });
    
}
