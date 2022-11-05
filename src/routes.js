const {
  addBookHandler, getBookHandler, getBookbyIdHandler, editBookbyIdHandler, deleteBookbyIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookbyIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookbyIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookbyIdHandler,
  },
];

module.exports = routes;
