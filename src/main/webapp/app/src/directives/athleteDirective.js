(function () {

    angular
        .module('users')
        .directive('athleteDirective', ['countryService', 'medalService', athleteDirective]);

    function athleteDirective(countryService, medalService) {
        return {
            restrict: 'E',
            scope: {
                medal: '=medal'
            },
            templateUrl: 'app/src/directives/athleteDirective.html',
            link: function(scope) {
                scope.getMedal = function(){
                    return medalService.getImageUrl(this.medal.medalId);
                };
                scope.country = countryService.getCountry(parseInt(scope.medal.countryId));
                scope.medalInfo = medalService.getMedal(scope.medal.medalId);
            }
        };
    }

})();
