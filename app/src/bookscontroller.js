(function(){
	'use strict';

  angular.module('bookstore')
    .controller('BooksController', BooksController)

    function BooksController(bookFactory){
      this.books = bookFactory.getBooks();
    }
    
})();
