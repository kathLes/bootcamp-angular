Let's hack a bit

Routing in Angular
- Add routes in your application by following these configuration
`.when('/', {
   templateUrl: 'templates/books.html',
   controller: 'BooksController'
  })
 .when('/books', {
   templateUrl: 'templates/books.html',
   controller: 'BooksController'
  })
 .when('/books/:id', {
   templateUrl: 'templates/details.html',
   controller: 'BookDetailsController'
  })
 `
- Implement the details view. You can use the $route or $routeParams service to get more info about your route.
- Don't forget to remove `ng-controller` from your template

NB: What happen when you manually enter a not registered route in your browser? How could you fix that?

Testing in Angular: Let's configure our application to be test ready
- Live coding step by step (We will do it all together)

More about Service in Angular: $http, $q and $log services
Our data so far are coming from a synchronous source.
- Use the $q service to turn this operation into an asynchronous one.
NB: Promise in JavaScript or Angular
- There's a mock service inside your snippets folder. Integrate it in your application.
- Use the `.run()` to configure the mocks in your application
NB: `run()` vs `.config()` ?
- Replace our fake asynchronous operations with real(mocks) implementation and fix the way you handle them using promise

Everything is a component: Let's turn everything into its own component
Here are your new routes:

`.when('/', {
   template: '<cl-books></cl-books>'
  })
 .when('/books', {
   template: '<cl-books></cl-books>'
  })
 .when('/books/:id', {
   template: '<cl-book-detail></cl-book-detail>',
  })
 `
- Refactory your application to reflect these changes using directives
  - `books` directive
  -  Replace `ng-include` with a directive `cl-navbar
  -  Create a `bookstore` directive that will replace our body content
