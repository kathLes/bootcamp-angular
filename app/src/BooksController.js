(function () {
    'use strict';
    angular.module('bookstore')
        .controller('BooksController', BooksController);

    //Dependency injection
    BooksController.$inject = ['bookFactory']

    function BooksController(bf) {
        this.books = bf.getBooks();
    }

})()