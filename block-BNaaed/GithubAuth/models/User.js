var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:{type:String,requerd:true},
    email:{type:String,requerd:true},
    username:{type:String,requerd:true},
    photo:{type:String}
},{timestamps:true});

var User = mongoose.model('User',userSchema);

module.exports = User;