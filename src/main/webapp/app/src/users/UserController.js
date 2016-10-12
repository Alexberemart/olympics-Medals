(function () {

    angular
        .module('users')
        .controller('UserController', [
            '$scope', 'resultService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$q', '$filter', '$mdDialog', 'genderService', 'countryService',
            UserController
        ]);

    angular
        .module('users')
        .filter('resultFilter', resultFilter);

    function UserController($scope, resultService, $mdSidenav, $mdBottomSheet, $timeout, $log, $q, $filter, $mdDialog, genderService, countryService) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
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


        self.loadResults = function () {
            resultService
                .loadAllResults()
                .then(function (medals) {
                    self.medals = [].concat(medals.data);
                });
        };

        self.loadResults();

        $scope.$on("reloadResults", function(){
            self.loadResults();
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

        // function init () {
        //     resultService
        //         .loadAllMedals()
        //         .then(function (results) {
        //             results.forEach(function(element){
        //                 resultService.addResult(element);
        //             });
        //             self.loadResults();
        //         });
        // }
        //
        // init();

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
                    // result.male = true;
                    // result.female = true;
                    // result.medals = [
                    //     {
                    //         medalId: 1,
                    //         name: 'Ku Bon-chan',
                    //         countryId: 12
                    //     },
                    //     {
                    //         medalId: 2,
                    //         name: 'Jean-Charles Valladont',
                    //         countryId: 4
                    //     },
                    //     {
                    //         medalId: 3,
                    //         name: 'Brady Ellison',
                    //         countryId: 2
                    //     }
                    // ];
                    // result = {
                    //     sport: 'Archery',
                    //     event: 'Men\'s individual',
                    //     male: true,
                    //     female: false,
                    //     medals: [
                    //         {
                    //             medalId: 1,
                    //             name: 'Ku Bon-chan',
                    //             countryId: 12
                    //         },
                    //         {
                    //             medalId: 2,
                    //             name: 'Jean-Charles Valladont',
                    //             countryId: 4
                    //         },
                    //         {
                    //             medalId: 3,
                    //             name: 'Brady Ellison',
                    //             countryId: 2
                    //         }
                    //     ]
                    // };
                    console.log(result);
                    resultService.addResult(result)
                        .then(function(){
                            self.loadResults();
                        })
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
        $scope.athletes = [];

        // $scope.athletes = [
        //     {
        //         medal: {
        //             id: 1,
        //             name: 'Gold',
        //             imageUrl: 'app/images/pict--olympic-medal,-gold-winter-olympics-pictograms-vector-stencils-library.png'
        //         },
        //         name: 'Usain Bolt',
        //         country: {
        //             id: 12,
        //             name: 'South Korea',
        //             flagUrl: 'app/images/SKOR0001.gif'
        //         }
        //     }
        // ];

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.save = function () {
            var gender = genderService.getGender($scope.result.gender)[0];
            $scope.result.male = gender.maleResults;
            $scope.result.female = gender.femaleResults;
            var medals = [];
            $scope.athletes.forEach(function (element) {
                medals.push({
                    medalId: element.medal.id,
                    name: element.name,
                    countryId: element.country.id
                });
            });
            $scope.result.medals = medals;
            $mdDialog.hide($scope.result);
        };

        $scope.addItem = function (ev) {
            $scope.isMedalOnEdit = true;
            $scope.medalOnEdit = {};
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

        $scope.saveNewMedal = function () {
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
