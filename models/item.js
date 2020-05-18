var mongoose=require('mongoose');

var userSchema= new mongoose.Schema({
    id:String,
    item_name:String,
    category:String,
    brand:String,
    price:Number,
    quantity:Number,
    userID:String,
    updated_at:{type:Date,default:Date.now},
});

module.exports=mongoose.model('item',userSchema);