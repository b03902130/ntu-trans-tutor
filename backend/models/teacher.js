const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const TeacherSchema = new Schema({
    googleid: {
        type: String,
        required: [true, 'Googleid field is required.']
    },
    description: {
        type: String,
        required: [true, 'Description field is required.']
    },
})

// Creating a table within database with the defined schema
const Teacher = mongoose.model('teacher', TeacherSchema)

// Exporting table for querying and mutating
module.exports = Teacher