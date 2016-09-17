(function () {
    'use strict';

    angular.module('common')
        .service('genderService', genderService);

    function genderService() {

        var genderValues = [
            {
                id: 1,
                name: 'all',
                primary: true,
                maleResults: true,
                femaleResults: true
            },
            {
                id: 2,
                name: 'only male',
                maleResults: true,
                femaleResults: false
            }
            ,
            {
                id: 3,
                name: 'only female',
                maleResults: false,
                femaleResults: true
            }
        ];

        return {
            getGenderValues: function (countryId) {
                return genderValues;
            }
        };
    }

})();
