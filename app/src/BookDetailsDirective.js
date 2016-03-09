(function(){
  'using strict';
  angular.module('bookstore')
    .directive('clBookDetail', clBookDetail);

  function clBookDetail(){
    return {
      restrict : 'E', //E--> Element, A --> Attribute
      scope: {},
      templateUrl: 'templates/bookDetails.html',
      controller: 'BookDetailsController',
      controllerAs: 'detailModel'
    }
  }
})();