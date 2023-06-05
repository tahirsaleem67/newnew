let mongoose = require("mongoose");

let courseSchema = mongoose.Schema({
    title: String,
    description: String,
    pic: String
})

let Courses = mongoose.model('course', courseSchema);

module.exports = Courses;