(function () {
  'use strict';
  angular.module('bookstore')
    .controller('BookDetailsController', BookDetailsController);

  BookDetailsController.$inject = ['$routeParams', 'bookFactory'];

  function BookDetailsController(rp, bookFactory) {
    var bookId = rp.id;
    var bookPromise = bookFactory.getBookById(bookId);
    bookPromise.then(success.bind(this));
    function success(response) {
      this.book = response;
    }
  }

})();
