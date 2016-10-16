(function () {

    angular
        .module('countries')
        .controller('countryCtrl', [
            '$scope', 'resultService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$q', '$filter', '$mdDialog', 'genderService', 'countryService',
            countryCtrl
        ]);


    function countryCtrl($scope, resultService, $mdSidenav, $mdBottomSheet, $timeout, $log, $q, $filter, $mdDialog, genderService, countryService) {

        function loadAllCountries() {
            countryService.getCountries()
                .then(function (data) {
                    $scope.countries = data.data;
                });
        }

        $scope.addCountry = function (ev) {
            $mdDialog.show({
                controller: newResultCtrl,
                templateUrl: 'app/src/country/newCountry.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false
            })
                .then(function (result) {
                    countryService
                        .saveCountry(result)
                        .then(function () {
                            loadAllCountries();
                        })
                }, function () {
                    self.status = 'You cancelled the dialog.';
                });
        };

        loadAllCountries();
    }

    function newResultCtrl(resultService, $scope, $mdDialog, genderService, countryService, medalService) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.save = function () {
            $mdDialog.hide($scope.countryOnEdit);
        };
    }

})();
