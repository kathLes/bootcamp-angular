(function () {
    angular.module('bookstore')
        .controller('BooksController', BooksController)
    ;

    function BooksController($scope, bookFactory) {
        $scope.books = bookFactory.getBooks();
    }

})()