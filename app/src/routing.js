(function(){
  'use strict';

  angular.module('bookstore')
    .config(routing)

    function routing($routeProvider){
      $routeProvider
        .when('/', {
          template: '<cl-books></cl-books>'
        })
        .when('/books', {
          template: '<cl-books></cl-books>'
        })
        .when('/books/:id', {
          template: '<cl-book-detail></cl-book-detail>',
        })
        /*.when('/', {
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
        })*/
        .when('/books/add', {
          templateUrl: 'templates/bookDetails.html',
          controller: 'BookDetailsController',
          controllerAs : 'detailModel'
        })
        .otherwise('/');
    }
})();
