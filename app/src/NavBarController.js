(function () {

    angular.module('bookstore')
        .controller('NavBarController', NavBarController);

    function NavBarController($scope) {
        $scope.title = 'Bookstore by Gaël and Kathleen';
    }
})()