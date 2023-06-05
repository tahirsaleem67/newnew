let mongoose= require("mongoose");

let gallerySchema= mongoose.Schema({
    title:String,
    occasion:String,
    pic:String
})

let Gallery= mongoose.model('gallery', gallerySchema);

module.exports= Gallery;