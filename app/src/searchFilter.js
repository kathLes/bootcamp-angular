(
    function () {
        angular.module('bookstore')
            .filter('search', searchFilter);

        function searchFilter() {
            return function (value, searchTerm) {
                if (!searchTerm) {
                    return value;
                }
                var result = [];
                for (var key in value) {
                    var book = value[key];
                    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                        result.push(book);
                    }
                }
                return result;
            }
        }
    }
)
()