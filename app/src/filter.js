(function(){
	'use strict';

  angular.module('bookstore')
     .filter('filter', filterFilter)

  function filterFilter(){
    return function(books, searchTerm){

      if(!searchTerm) return books;

      return books.filter((book)=>{
        return book.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0;
      });
    }
  }
})();
