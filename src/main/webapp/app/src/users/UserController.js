(function () {

    angular
        .module('users')
        .controller('UserController', [
            'resultService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$q', '$filter',
            UserController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function UserController(resultService, $mdSidenav, $mdBottomSheet, $timeout, $log, $q, $filter) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.querySearch = querySearch;
        self.maleResults = false;

        // Load all registered users

        resultService
            .loadAllUsers()
            .then(function (users) {
                self.users = [].concat(users);
                self.selected = users[0];
            });

        resultService
            .loadAllMedals()
            .then(function (medals) {
                self.medals = [].concat(medals);
            });

        resultService
            .loadAllSports()
            .then(function (sports) {
                self.sports = [].concat(sports);
            });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectUser(user) {
            self.selected = angular.isNumber(user) ? $scope.users[user] : user;
        }

        function querySearch(query) {
            var results = query ? self.sports.filter(createFilterFor(query)) : self.sports;
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        }

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

})();
