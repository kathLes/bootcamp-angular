(function(){
  'use strict';

  angular.module('bookstore')
    .config(routing)

    function routing($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'templates/books.html',
          controller: 'BooksController'
        })
        .when('/books', {
          templateUrl: 'templates/books.html',
          controller: 'BooksController'
        })
        .when('/books/:id', {
          templateUrl: 'templates/bookDetails.html',
          controller: 'BooksController'
        })
        .when('/books/add', {
          templateUrl: 'templates/books.html',
          controller: 'BooksController'
        })
    }
})();
