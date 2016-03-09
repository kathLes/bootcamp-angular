(function(){

  angular.module('bookstore')
    .directive('clNavbar', clNavbar);

  function clNavbar(){
    return{
      restrict : 'E',
      templateUrl: 'templates/navbar.html',
      scope: {},
      controller : 'NavBarController' ,
      controllerAs: 'nav'
    }
  }

})();