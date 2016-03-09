(function(){
	'use strict';

  angular.module('bookstore')
    .controller('NavBarController', NavBarController)

    function NavBarController(config){
      this.title = config.title;
    }
})();
