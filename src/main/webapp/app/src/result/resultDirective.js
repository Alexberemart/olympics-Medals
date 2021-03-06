(function () {

    angular
        .module('olympic-medals')
        .directive('resultDirective', ['resultService', resultDirective]);

    function resultDirective(resultService) {
        return {
            restrict: 'E',
            scope: {
                result: '=result'
            },
            templateUrl: 'app/src/result/resultDirective.html',
            link: function(scope) {
                scope.deleteResult = function(result){
                    resultService.deleteResult(result)
                        .then(function(){
                            scope.$emit("reloadResults")
                        })
                };
            }
        };
    }

})();
