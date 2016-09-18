(function () {

    angular
        .module('medals')
        .directive('medalWithImage', medalWithImageDirective);

    function medalWithImageDirective() {
        return {
            restrict: 'E',
            scope: {
                medal: '=medal'
            },
            templateUrl: 'app/src/medal/medalWithImage.html'
        };
    }

})();