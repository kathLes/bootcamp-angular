(function () {
  'use strict';
  angular.module('bookstore')
    .controller('BooksDetailsController', BooksDetailsController);

  function BooksDetailsController(bookFactory) {
    var booksPromise = bookFactory.getBooks();

    booksPromise.then(success.bind(this));
    function success(result) {
      this.book = result;
    }
  }

  BooksDetailsController.$inject = ['bookFactory'];
})
()
