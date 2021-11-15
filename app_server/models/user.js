var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    username:{type:String, required: true, unique: true},
    password: {type:String, required: true}
},{collation:'User'});

var User = mongoose.model('User', userSchema);

module.exports = User;