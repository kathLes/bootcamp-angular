(function(){
  'use strict';

  angular.module('bookstore')
    .factory('bookFactory', bookFactory);

  bookFactory.$inject = ['$q', '$http'];

  function bookFactory($q, $http){

    return {
      getBooks: getBooks,
      getBookById : getBookById
    }

    function getBookById(id){
      var deferred = $q.defer();
      var books = getBooks();

      var book;
      for(var key in books){
        if(books[key].bookID.toString() === id){
          book = books[key];
        }
      }

      deferred.resolve(book);
      return deferred.promise();
    }
    function getBooks(){
      var deferred = $q.defer();

      var booksPromise = $http.get('/api/books');
      booksPromise.then(success).catch(error);
      function success(response) {
        deferred.resolve(response.data);
      }
      function error(resp) {
        console.log(resp);
      }

      return deferred.promise;
    }
  }



})();
