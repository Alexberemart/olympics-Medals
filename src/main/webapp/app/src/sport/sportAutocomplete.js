(function () {

    angular
        .module('users')
        .directive('sportAutocomplete', ['resultService', '$q', '$timeout', sportAutocomplete]);

    function sportAutocomplete(resultService, $q, $timeout) {
        return {
            restrict: 'E',
            scope: {
                selectedItem: '=selectedItem',
                searchText: '=searchText',
                sportAutocompleteLabel: '@',
                sportAutocompleteRequired: '='
            },
            // require: '^form',
            templateUrl: 'app/src/sport/sportAutocomplete.html',
            link: function(scope, element, attrs, ctrl) {

                debugger;
                scope.searchForm = ctrl;

                resultService
                    .loadAllSports()
                    .then(function (sports) {
                        scope.sports = [].concat(sports);
                    });

                scope.querySearch = function(query) {
                    var results = query ? scope.sports.filter(createFilterFor(query)) : scope.sports;
                    var deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve(results);
                    }, Math.random() * 1000, false);
                    return deferred.promise;
                };

                /**
                 * Create filter function for a query string
                 */
                function createFilterFor(query) {
                    var lowercaseQuery = angular.lowercase(query);

                    return function filterFn(user) {
                        return (angular.lowercase(user.name)).indexOf(lowercaseQuery) === 0;
                    };

                }
            }
        };
    }

})();