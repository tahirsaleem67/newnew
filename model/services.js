let mongoose= require("mongoose");

let serviceSchema= mongoose.Schema({
    title: String,
    description:String,
    pic:String
})

let Services= mongoose.model('service', serviceSchema);

module.exports= Services;