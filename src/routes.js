const addBookHandler = require("./handler/addBookHandler");
const getBooksHandler = require("./handler/getBooksHandler");
const getBookByIdHandler = require("./handler/getBookByIdHandler");
const updateBookHandler = require("./handler/updateBookHandler");
const deleteBookHandler = require("./handler/deleteBookHandler");

const routes = [
  { method: "POST", path: "/books", handler: addBookHandler },
  { method: "GET", path: "/books", handler: getBooksHandler },
  { method: "GET", path: "/books/{bookId}", handler: getBookByIdHandler },
  { method: "PUT", path: "/books/{bookId}", handler: updateBookHandler },
  { method: "DELETE", path: "/books/{bookId}", handler: deleteBookHandler },
];

module.exports = routes;
