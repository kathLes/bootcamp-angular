(function(){
	'use strict';

  angular.module('bookstore')
    .controller('BooksController', BooksController)

    function BooksController(bookFactory){
      var booksPromise = bookFactory.getBooks();

      booksPromise.then(success.bind(this));
      function success(result) {
        this.books = result;
      }
    }

    BooksController.$inject = ['bookFactory'];

})();
