var mongoose=require('mongoose');

var userSchema= new mongoose.Schema({
    id:String,
    name:String,
    address:String,
    phone:Number,
    email:String,
    type:String,
    username:String,
    password:String,
    updated_at:{type:Date,default:Date.now},
});

module.exports=mongoose.model('shop',userSchema);