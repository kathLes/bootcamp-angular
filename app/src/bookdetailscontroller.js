(function(){
	'use strict';

  angular.module('bookstore')
    .controller('BookDetailsController', BookDetailsController)

    function BookDetailsController(bf, rp){
      this.book = bf.getBookById(rp.id);
      console.log(this.book);
    }

    BookDetailsController.$inject = ['bookFactory', '$routeParams'];

})();
