(function () {
    'use strict';

    angular.module('bookstore', ['ngRoute'])
        .config(routes);
    document.addEventListener('DOMContentLoaded', function(){
        angular.bootstrap(document, ['bookstore']);
    })

    function routes($routeProvider){
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
                controller: 'BooksDetailsController'
            })
    }
})();

