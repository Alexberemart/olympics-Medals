(function () {
    'use strict';

    angular.module('countries')
        .service('countryService', countryService);

    function countryService() {

        var countries = [
            {
                id : 1,
                name: 'Jamaica',
                flagUrl: './src/main/webapp/app/images/JAMA0001.gif'
            },
            {
                id : 2,
                name: 'United States',
                flagUrl: './src/main/webapp/app/images/UNST0001.gif'
            },
            {
                id : 3,
                name: 'Canada',
                flagUrl: './src/main/webapp/app/images/CANA0001.gif'
            },
            {
                id : 4,
                name: 'France',
                flagUrl: './src/main/webapp/app/images/FRAN0001.gif'
            },
            {
                id : 5,
                name: 'Russian Federation',
                flagUrl: './src/main/webapp/app/images/RUSS0001.gif'
            },
            {
                id : 6,
                name: 'Kazakhstan',
                flagUrl: './src/main/webapp/app/images/KAZK0001.gif'
            },
            {
                id : 7,
                name: 'Japan',
                flagUrl: './src/main/webapp/app/images/JAPA0001.gif'
            },
            {
                id : 8,
                name: 'Uzbekistan',
                flagUrl: './src/main/webapp/app/images/UZBK0001.gif'
            },
            {
                id : 9,
                name: 'Denmark',
                flagUrl: './src/main/webapp/app/images/DENM0001.gif'
            },
            {
                id : 10,
                name: 'Belarus',
                flagUrl: './src/main/webapp/app/images/BLRU0001.gif'
            },
            {
                id : 11,
                name: 'Sweden',
                flagUrl: './src/main/webapp/app/images/SWDN0001.gif'
            },
            {
                id : 12,
                name: 'South Korea',
                flagUrl: './src/main/webapp/app/images/SKOR0001.gif'
            }
        ];

        // Promise-based API
        return {
            getCountry: function (countryId) {
                return countries.filter(function(element){
                    return element.id === countryId
                })[0];
            }
        };
    }

})();
