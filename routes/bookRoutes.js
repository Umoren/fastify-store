//routes/bookRoutes.js
const bookController = require('../controllers/bookController');
const routes = [
    {
        method: 'GET', 
        url: '/api/books',
        handler: bookController.getAllBooks
    },
    {
        method: 'GET',
        url: '/api/book/:id',
        handler: bookController.getSingleBook
    },
    {
        method: 'POST', 
        url: '/api/book',
        handler: bookController.addNewBook
    },
    {
        method: 'PUT',
        url: '/api/book/:id',
        handler: bookController.updateBook
    },
    {
        method: 'DELETE',
        url: '/api/book/:id',
        handler: bookController.deleteBook
    }
]
module.exports = routes