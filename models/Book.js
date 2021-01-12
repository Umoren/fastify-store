const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    genre: {
        type: String, 
        required: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    }
});


module.exports = mongoose.model('BOOK', bookSchema)