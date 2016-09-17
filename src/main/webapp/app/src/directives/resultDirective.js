(function () {

    angular
        .module('users')
        .directive('resultDirective', resultDirective);

    function resultDirective() {
        return {
            restrict: 'E',
            scope: {
                result: '=result'
            },
            templateUrl: 'app/src/directives/resultDirective.html'
        };
    }

})();
