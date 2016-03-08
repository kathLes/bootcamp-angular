(function () {
    'use strict';

    angular.module('bookstore', [])
        .controller('AppController', AppController)
        .controller('NavBarController', NavBarController)
        .controller('BooksController', BooksController)
        .filter('search', searchFilter)
    ;

    function AppController($scope) {
        $scope.title = 'Bookstore';
    }

    function NavBarController($scope) {
        $scope.title = 'Bookstore by Gaël and Kathleen';
    }

    function searchFilter() {
        return function (value, searchTerm) {
            console.log(value, searchTerm);
            if (!searchTerm) {
                return value;
            }
            console.log(value, searchTerm);
            var result = [];
            for (var key in value) {
                var book = value[key];
                console.log(book);
                if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    result.push(book);
                }
            }
            return result;
        }
    }

    function BooksController($scope) {
        $scope.books = getBooks();
    }

    function getBooks() {
        return [
            {
                bookID: 09809,
                author: 'Davy Mitchel',
                title: 'Functional JavaScript',
                description: 'Functional programming in JavaScript',
                price: 29.99,
                category: 'Programming language',
                cover: 'assets/images/javascript.jpg'
            },
            {
                bookID: 09100,
                author: 'Max Mitchel',
                title: 'AngularJS: Up and Running',
                description: 'Enhanced Productivity with Structured Web Apps',
                price: 19.99,
                category: 'Web Frameworks',
                cover: 'assets/images/angularjs.jpg'
            },
            {
                bookID: 09353,
                author: 'Jesse Cravens, Thomas Q Brady',
                title: 'Building Web Apps with Ember.js',
                description: "Build ambitious JavaScript App",
                price: 9.99,
                category: 'Web Frameworks',
                cover: 'assets/images/iot.jpg'
            },
            {
                bookID: 09353,
                author: 'Jesse Cravens, Thomas Q Brady',
                title: 'Building Web Apps with Ember.js',
                description: "Build ambitious JavaScript App",
                price: 9.99,
                category: 'Web Frameworks',
                cover: 'assets/images/datavis.jpg'
            },
            {
                bookID: 09353,
                author: 'Jesse Cravens, Thomas Q Brady',
                title: 'ES6: JavaScript Next',
                description: "This book will cover ES6 entirely and will show you how to use ES6 today.",
                price: 9.99,
                category: 'Web Frameworks',
                cover: 'assets/images/es6.jpg'
            },
            {
                bookID: 09353,
                author: 'Jesse Cravens, Thomas Q Brady',
                title: 'Ionic Framework: Building hybrid app',
                description: "Build Hybrid apps using Angular, Ionic and deliver fast.",
                price: 9.99,
                category: 'Web Frameworks',
                cover: 'assets/images/ionic.jpg'
            },
            {
                bookID: 09546,
                author: 'Backstop Media, Rick Waldron',
                title: 'Make: JavaScript Robotics',
                description: 'Building NodeBots with Raspberry Pi, Arduino, and BeagleBone',
                price: 9.99,
                category: 'Robotic & Programming',
                cover: 'assets/images/robot.jpg'
            }
        ];
    }

})();

