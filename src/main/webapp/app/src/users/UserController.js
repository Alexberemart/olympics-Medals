(function () {

    angular
        .module('users')
        .controller('UserController', [
            'resultService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$q', '$filter', '$mdDialog', 'genderService', 'countryService',
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
    function UserController(resultService, $mdSidenav, $mdBottomSheet, $timeout, $log, $q, $filter, $mdDialog, genderService, countryService) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.querySearch = querySearch;
        self.maleResults = false;
        self.genderValues = genderService.getGenderValues();
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

        self.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: newResultCtrl,
                templateUrl: 'app/src/result/results.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false
            })
                .then(function (result) {
                    result.male = true;
                    result.female = true;
                    result.medals = [
                        {
                            medalId: 1,
                            name: 'Ku Bon-chan',
                            countryId: 12
                        },
                        {
                            medalId: 2,
                            name: 'Jean-Charles Valladont',
                            countryId: 4
                        },
                        {
                            medalId: 3,
                            name: 'Brady Ellison',
                            countryId: 2
                        }
                    ];
                    result = {
                        sport: 'Archery',
                        event: 'Men\'s individual',
                        male: true,
                        female: false,
                        medals: [
                            {
                                medalId: 1,
                                name: 'Ku Bon-chan',
                                countryId: 12
                            },
                            {
                                medalId: 2,
                                name: 'Jean-Charles Valladont',
                                countryId: 4
                            },
                            {
                                medalId: 3,
                                name: 'Brady Ellison',
                                countryId: 2
                            }
                        ]
                    };
                    console.log(result);
                    resultService.addResult(result);
                }, function () {
                    self.status = 'You cancelled the dialog.';
                });
        };

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
            else {
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

    function newResultCtrl(resultService, $scope, $mdDialog, genderService, countryService, medalService) {

        $scope.genderValues = genderService.getGenderValues();
        $scope.medals = medalService.getMedals();
        $scope.isMedalOnEdit = false;
        $scope.medalOnEdit = {};

        $scope.athletes = [
            {
                medal: {
                    id: 1,
                    name: 'Gold',
                    imageUrl: 'app/images/pict--olympic-medal,-gold-winter-olympics-pictograms-vector-stencils-library.png'
                },
                name: 'Usain Bolt',
                country: {
                    id: 12,
                    name: 'South Korea',
                    flagUrl: 'app/images/SKOR0001.gif'
                }
            }
        ];

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            console.log($scope.result);
            $mdDialog.hide(answer);
        };

        $scope.save = function () {
            $mdDialog.hide($scope.result);
        };

        $scope.addItem = function (ev) {
            $scope.isMedalOnEdit = true;
        };

        $scope.querySearch = function (searchText) {
            var countries = countryService.getCountries();

            if (!!searchText) {
                return countries.filter(function (element) {
                    return element.name.includes(searchText);
                });
            }
            else {
                return countries;
            }
        };

        $scope.saveNewMedal = function (searchText, item) {
            debugger;
            $scope.isMedalOnEdit = false;
            var athlete = {
                name: $scope.medalOnEdit.athlete.name,
                medal: $scope.medalOnEdit.medal,
                country: $scope.medalOnEdit.country
            };
            $scope.athletes.push(athlete)
        };

        $scope.cancelNewItem = function () {
            $scope.isMedalOnEdit = false;
        };

        $scope.change = function (item) {
            $scope.medalOnEdit.country = item;
        }

    };

})();
