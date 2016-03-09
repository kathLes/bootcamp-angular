describe('BooksController', function () {

  beforeEach(module('bookstore'));

  angular.module('bookstore')
    .controller('BooksController', BooksController);

  function BooksController() {
    this.books = ['JavaScript', 'Angular'];
  }

  var booksController;

  beforeEach(inject(function ($injector) {
      //retrieves the ControllerService --> used to retrieve the controllers
      var $controller = $injector.get('$controller');

      //retrieve the controller by name!
      booksController = $controller('BooksController');
      console.log(booksController);
    })
  );

  it('Check if booksController contains books', function () {
    expect(booksController.books).toBeDefined();
  });

  it('Check if booksController contains books', function () {
    expect(booksController.books.length).toEqual(2);
  });
});