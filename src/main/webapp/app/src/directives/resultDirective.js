(function () {

    angular
        .module('users')
        .directive('resultDirective', ['resultService', resultDirective]);

    function resultDirective(resultService) {
        return {
            restrict: 'E',
            scope: {
                result: '=result'
            },
            templateUrl: 'app/src/directives/resultDirective.html',
            link: function(scope) {
                scope.deleteResult = function(result){
                    resultService.deleteResult(result)
                    scope.$emit("reloadResults")
                };
            }
        };
    }

})();
