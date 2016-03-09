Folder structure (see README.md)

We will be writing our application inside the app folder:
- index.html (html code)
- src/index.js (JavaScript code)

Here are a list of TODOs for this application.

This application is an angular apps so let's bootstrap it:
- create a module *(angular.module)* called `bookstore`
- start your application from the root document
- Assign the title of the app to `Bookstore` using a AppController
- Assign the title of the navigation's bar to `Bookstore by {{your name}}` using a NavBarController

Now let's display our list of books
- Add a `BooksController` that has a property books.
For the moment you can use the list of books inside your snippets folder as source. Later we will be using a `service`
- Display all the books inside your view `index.html` by using `ng-repeat`
NB: inside your view you should have a clear indication of what to do for your bindings... :-)
NB: Learn more about `ng-repeat`

Now let's implement our search mechanism
We will first try to implement the search using evrything we learn yesterday
- Using the value you get from the input element (`search`) and `ng-model`:
- Add a function inside our `BooksController` called `search`

Introducing filters in Angular
- Let's use the filter's filter to do the same job: 
- warning....=> the filter filter is not implemented so you will have to implement it yourself
NB: Learn more about `ng-model`

Let's use services to manage our data
- Add a service called `bookFactory` that returns a method `getBooks` which returns a your list of books
- Then use that service in your `BooksController` to display the list of books
NB: There are many ways to create services in Angular

Time to refactor our application
- Move every single function inside its own file and don't forget to import them from the index.html

Huh, here you should be done for the moment.... Next is coming right after that! Stay tuned...
