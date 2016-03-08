(function () {
        angular.module('bookstore')
            .controller('AppController', AppController);

        function AppController($scope) {
            $scope.title = 'Bookstore';
        }
    })
()
