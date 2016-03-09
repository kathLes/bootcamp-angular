(function(){
	'use strict';

  angular.module('bookstore')
    .controller('BookDetailsController', BookDetailsController)

    function BookDetailsController(bf, rp){
      var booksPromise = bf.getBookById(rp.id);

      booksPromise.then(success.bind(this));
      function success(result) {
        this.book = result;
      }
    }

    BookDetailsController.$inject = ['bookFactory', '$routeParams'];

})();
