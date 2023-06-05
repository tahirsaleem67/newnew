let mongoose= require("mongoose");

let userSchema= mongoose.Schema({
    name: String,
    education:String,
    email: String,
    password:String,
    number:Number,
    pic:String
})

let Users= mongoose.model('user', userSchema);

module.exports= Users;