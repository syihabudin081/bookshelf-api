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
    path: '/books/{id}',
    handler: getBookbyIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookbyIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookbyIdHandler,
  },
];

module.exports = routes;
