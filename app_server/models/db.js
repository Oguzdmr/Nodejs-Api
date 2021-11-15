var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb+srv://oguzhan:oguz1234@cluster0.7lbim.mongodb.net/NodeProjectLast';

mongoose.connect(mongoDB,function(err,err){
    if(err){
        console.log('mongoose error: '+err);
    }else{
        console.log('mongoose connect:' +mongoDB)    
    }
})