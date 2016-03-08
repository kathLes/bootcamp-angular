(function () {

    angular.module('bookstore')
        .controller('NavBarController', NavBarController);

    function NavBarController() {
        this.title = 'Bookstore by Gaël and Kathleen';
    }
})()