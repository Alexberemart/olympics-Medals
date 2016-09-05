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
            templateUrl: './src/main/webapp/app/src/directives/resultDirective.html'
        };
    }

})();
