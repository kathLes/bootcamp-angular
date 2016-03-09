(function(){
  'use strict';

  angular.module('bookstore')
    .config(routing)

    function routing($routeProvider, $locationProvider){
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
          templateUrl: 'templates/details.html',
          controller: 'BooksController'
        })
        .when('/books/add', {
          templateUrl: 'templates/books.html',
          controller: 'BooksController'
        })
        .otherwise('/');
    }
})();
