let mongoose = require("mongoose");

let contactSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    subject:String,
    message:String

})

let Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;