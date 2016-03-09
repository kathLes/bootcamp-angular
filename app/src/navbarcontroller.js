(function () {
    'use strict';
    angular.module('bookstore')
        .controller('NavBarController', NavBarController);

    function NavBarController() {
        this.title = 'Bookstore by Kathleen';
    }
})()