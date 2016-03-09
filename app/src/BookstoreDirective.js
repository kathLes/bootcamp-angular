(function(){

  angular.module('bookstore')
    .directive('clBookstore', clBookstore);

  function clBookstore(){
    return{
      restrict : 'E',
      scope : {},
      templateUrl: 'templates/bookstore.html'
    }
  }
})();