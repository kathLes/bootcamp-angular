(function(){
	'use strict';

  angular.module('bookstore', ['ngRoute', 'ngMock']);

  document.addEventListener('DOMContentLoaded', function(){
    angular.bootstrap(document, ['bookstore']);
  });

})();
