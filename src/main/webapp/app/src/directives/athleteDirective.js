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
                countryService.getCountry(scope.medal.countryId)
                    .then(function(data){
                        scope.country = data.data;
                    });
                scope.medalInfo = medalService.getMedal(scope.medal.medalId);
            }
        };
    }

})();
