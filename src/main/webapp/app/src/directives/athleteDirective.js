(function () {

    angular
        .module('users')
        .directive('athleteDirective', athleteDirective);

    function athleteDirective() {
        return {
            restrict: 'E',
            scope: {
                medal: '=medal'
            },
            templateUrl: './src/main/webapp/app/src/directives/athleteDirective.html'
        };
    }

})();
