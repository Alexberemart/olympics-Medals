(function () {

    angular
        .module('users')
        .controller('UserController', [
            'resultService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$q', '$filter',
            UserController
        ]);

    angular
        .module('users')
        .filter('resultFilter', resultFilter);

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
        self.genderValues = [
            {
                id: 1,
                name: 'all',
                primary: true,
                maleResults: true,
                femaleResults: true
            },
            {
                id: 2,
                name: 'only male',
                maleResults: true,
                femaleResults: false
            }
            ,
            {
                id: 3,
                name: 'only female',
                maleResults: false,
                femaleResults: true
            }
        ];
        self.selectedGenderId = self.genderValues[0].id;

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

    function resultFilter() {
        return function (items, searchText, selectedGenderID, genderValues) {

            if (!!selectedGenderID) {
                // var selectedGender = JSON.parse(selectedGenderID);
                var selectedGender = genderValues.filter(function (element) {
                    return element.id === parseInt(selectedGenderID);
                })[0]
            }

            if (!items) {
                return null;
            }


            if (!!searchText) {
                var resultsFilteredBySport = items.filter(function (element) {
                    return element.sport.includes(searchText);
                });
            }
            else{
                var resultsFilteredBySport = items;
            }

            return resultsFilteredBySport.filter(function (element) {

                if (!selectedGender) {
                    return false;
                }

                if (!!element.male) {
                    if (selectedGender.maleResults && element.male) {
                        return true;
                    }
                }
                if (!!element.female) {
                    if (selectedGender.femaleResults && element.female) {
                        return true;
                    }
                }
                return false;
            });
        };

    }

})();
