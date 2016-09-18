(function () {

    angular
        .module('countries')
        .directive('countryWithFlag', countryWithFlagDirective);

    function countryWithFlagDirective() {
        return {
            restrict: 'E',
            scope: {
                country: '=country'
            },
            templateUrl: 'app/src/country/countryWithFlag.html'
        };
    }

})();