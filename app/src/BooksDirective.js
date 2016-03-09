(function(){
  'using strict';
  angular.module('bookstore')
    .directive('clBooks', clBooks);

  function clBooks(){
    return {
      restrict : 'E', //E--> Element, A --> Attribute
      scope: {},
      templateUrl: 'templates/books.html',
      controller: 'BooksController',
      controllerAs: 'booksModel'
    }
  }
})();