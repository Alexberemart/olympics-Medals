(function () {
    'use strict';

    angular.module('medals')
        .service('medalService', medalService);

    function medalService() {

        var medals = [
            {
                id : 1,
                name: 'Gold',
                imageUrl: './src/main/webapp/app/images/pict--olympic-medal,-gold-winter-olympics-pictograms-vector-stencils-library.png'
            },
            {
                id : 2,
                name: 'Silver',
                imageUrl: './src/main/webapp/app/images/pict--olympic-medal,-silver-winter-olympics-pictograms-vector-stencils-library.png'
            },
            {
                id : 3,
                name: 'Bronze',
                imageUrl: './src/main/webapp/app/images/pict--olympic-medal,-bronze-winter-olympics-pictograms-vector-stencils-library.png'
            }
        ];

        return {
            getMedal: function (medalID) {
                return medals.filter(function(element){
                    return element.id === medalID
                })[0];
            },
            getImageUrl: function (medalID) {
                return this.getMedal(medalID).imageUrl;
            }
        };
    }

})();
