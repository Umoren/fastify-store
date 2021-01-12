const boom = require('boom')
const Book = require('../models/Book');

// get all books
exports.getAllBooks = async (req, reply) => {
    try {
        let books = await Book.find()
        return reply.code(200)
        .send(
            {
             Message: "Success",
             data: books
            }
        )

    } catch (err) {
        throw boom.boomify(err)
    }
}

//get a single book by id
exports.getSingleBook = async (req, reply) => {
    try {
        const id = req.params.id
        let book = await Book.findById(id)
        return reply.code(200)
        .send({ Message: "Success", data: book}, )

    } catch (err) {
        throw boom.boomify(err)
    }
}

//add a new book
exports.addNewBook = async (req, reply) => {
    try {
        let book = new Book(req.body);
        let newBook = await book.save()
        return reply.code(200)
        .send({ Message: "New Book added successfully", data: newBook})

    }
    catch (err) {
        throw boom.boomify(err)
    }
}

//edit a book
exports.updateBook = async (req, reply) => {
    try {
        const id = req.params.id
        let updatedBook = await Book.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return reply.code(200)
        .send({ Message: "Book updated successfully", data: updatedBook})

    } catch (err) {
        throw boom.boomify(err)
    }
}

//delete a book
exports.deleteBook = async (req, reply) => {
    try {
        const id = req.params.id
        let deletedBook = await Book.findByIdAndDelete(id);
        return reply.code(200)
        .send({ Message: `${deletedBook.title} has been deleted successfully`, data: id})

    } catch (err) {
        throw boom.boomify(err)
    }
}