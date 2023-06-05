let mongoose = require('mongoose');

try {
    let connect = mongoose.connect("mongodb+srv://Sharjeel:11@cluster0.xwa8kag.mongodb.net/")
    console.log(connect)
} catch (e) {
    console.log(e)
}