(function(){
	'use strict';

  angular.module('bookstore')
    .controller('AppController', AppController)

    function AppController(config){
      this.title = config.title;
    }

})();
