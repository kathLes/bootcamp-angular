(function(){
  'use strict';

  angular.module('bookstore')
    .config(routing)

    function routing($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'templates/books.html',
          controller: 'BooksController',
          controllerAs : 'booksModel'
        })
        .when('/books', {
          templateUrl: 'templates/books.html',
          controller: 'BooksController',
          controllerAs : 'booksModel'
        })
        .when('/books/:id', {
          templateUrl: 'templates/bookDetails.html',
          controller: 'BookDetailsController',
          controllerAs : 'detailModel'
        })
        .when('/books/add', {
          templateUrl: 'templates/bookDetails.html',
          controller: 'BookDetailsController',
          controllerAs : 'detailModel'
        })
        .otherwise('/');
    }
})();
