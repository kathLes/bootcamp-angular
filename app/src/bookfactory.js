(function () {
  'use strict';

  angular.module('bookstore')
    .factory('bookFactory', bookFactory);

  bookFactory.$inject = ['$q', '$http'];

  function bookFactory($q, $http) {

    return {
      getBooks: getBooks,
      getBookById: getBookById
    }

    function getBookById(bookId) {
      var deferred = $q.defer();
      var bookPromise = $http.get('/api/books/' + bookId);

      bookPromise.then(success).catch(error);
      function success(response) {
        deferred.resolve(response.data);
      }

      function error(response) {
        console.log(response)
        deferred.reject(response);
      }

      return deferred.promise;
    }

    function getBooks() {
      var deferred = $q.defer();

      var booksPromise = $http.get('/api/books');
      booksPromise.then(success).catch(error);
      function success(response) {
        deferred.resolve(response.data);
      }

      function error(resp) {
        console.log(resp);
        deferred.reject(response);
      }

      return deferred.promise;
    }
  }
})();
