(function () {
    'use strict';

    angular.module('countries')
        .service('countryService', ['$http', '$q', 'urlConstantsFact', countryService]);

    function countryService($http, $q, urlConstantsFact) {

        var countries = [
            {
                id : 1,
                name: 'Jamaica',
                flagFileName: 'JAMA0001.GIF'
            },
            {
                id : 2,
                name: 'United States',
                flagFileName: 'UNST0001.GIF'
            },
            {
                id : 3,
                name: 'Canada',
                flagFileName: 'CANA0001.GIF'
            },
            {
                id : 4,
                name: 'France',
                flagFileName: 'FRAN0001.GIF'
            },
            {
                id : 5,
                name: 'Russian Federation',
                flagFileName: 'RUSS0001.GIF'
            },
            {
                id : 6,
                name: 'Kazakhstan',
                flagFileName: 'KAZK0001.GIF'
            },
            {
                id : 7,
                name: 'Japan',
                flagFileName: 'JAPA0001.GIF'
            },
            {
                id : 8,
                name: 'Uzbekistan',
                flagFileName: 'UZBK0001.GIF'
            },
            {
                id : 9,
                name: 'Denmark',
                flagFileName: 'DENM0001.GIF'
            },
            {
                id : 10,
                name: 'Belarus',
                flagFileName: 'BLRU0001.GIF'
            },
            {
                id : 11,
                name: 'Sweden',
                flagFileName: 'SWDN0001.GIF'
            },
            {
                id : 12,
                name: 'South Korea',
                flagFileName: 'SKOR0001.GIF'
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
                return $http.get(urlConstantsFact.SAVE_COUNTRY());
            },
            saveCountry: function (country) {

                var countryToSave = {
                    name: country.name,
                    flagFileName: country.flagFileName
                };

                return $http.post(urlConstantsFact.SAVE_COUNTRY(), countryToSave);
            }
        };
    }

})();
