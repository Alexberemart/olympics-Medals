(function () {
    'use strict';

    angular.module('countries')
        .service('countryService', countryService);

    function countryService() {

        var countries = [
            {
                id : 1,
                name: 'Jamaica',
                flagUrl: 'app/images/JAMA0001.gif'
            },
            {
                id : 2,
                name: 'United States',
                flagUrl: 'app/images/UNST0001.gif'
            },
            {
                id : 3,
                name: 'Canada',
                flagUrl: 'app/images/CANA0001.gif'
            },
            {
                id : 4,
                name: 'France',
                flagUrl: 'app/images/FRAN0001.gif'
            },
            {
                id : 5,
                name: 'Russian Federation',
                flagUrl: 'app/images/RUSS0001.gif'
            },
            {
                id : 6,
                name: 'Kazakhstan',
                flagUrl: 'app/images/KAZK0001.gif'
            },
            {
                id : 7,
                name: 'Japan',
                flagUrl: 'app/images/JAPA0001.gif'
            },
            {
                id : 8,
                name: 'Uzbekistan',
                flagUrl: 'app/images/UZBK0001.gif'
            },
            {
                id : 9,
                name: 'Denmark',
                flagUrl: 'app/images/DENM0001.gif'
            },
            {
                id : 10,
                name: 'Belarus',
                flagUrl: 'app/images/BLRU0001.gif'
            },
            {
                id : 11,
                name: 'Sweden',
                flagUrl: 'app/images/SWDN0001.gif'
            },
            {
                id : 12,
                name: 'South Korea',
                flagUrl: 'app/images/SKOR0001.gif'
            }
        ];

        // Promise-based API
        return {
            getCountry: function (countryId) {
                return countries.filter(function(element){
                    return element.id === countryId
                })[0];
            },
            getCountries: function(){
                return countries;
            }
        };
    }

})();
