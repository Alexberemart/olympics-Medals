(function () {
    'use strict';

    angular.module('countries')
        .service('countryService', ['$http', '$q', 'urlConstantsFact', countryService]);

    function countryService($http, $q, urlConstantsFact) {

        var countries = [
            {
                id : 1,
                name: 'Jamaica',
                flagFileName: 'app/images/JAMA0001.GIF'
            },
            {
                id : 2,
                name: 'United States',
                flagFileName: 'app/images/UNST0001.GIF'
            },
            {
                id : 3,
                name: 'Canada',
                flagFileName: 'app/images/CANA0001.GIF'
            },
            {
                id : 4,
                name: 'France',
                flagFileName: 'app/images/FRAN0001.GIF'
            },
            {
                id : 5,
                name: 'Russian Federation',
                flagFileName: 'app/images/RUSS0001.GIF'
            },
            {
                id : 6,
                name: 'Kazakhstan',
                flagFileName: 'app/images/KAZK0001.GIF'
            },
            {
                id : 7,
                name: 'Japan',
                flagFileName: 'app/images/JAPA0001.GIF'
            },
            {
                id : 8,
                name: 'Uzbekistan',
                flagFileName: 'app/images/UZBK0001.GIF'
            },
            {
                id : 9,
                name: 'Denmark',
                flagFileName: 'app/images/DENM0001.GIF'
            },
            {
                id : 10,
                name: 'Belarus',
                flagFileName: 'app/images/BLRU0001.GIF'
            },
            {
                id : 11,
                name: 'Sweden',
                flagFileName: 'app/images/SWDN0001.GIF'
            },
            {
                id : 12,
                name: 'South Korea',
                flagFileName: 'app/images/SKOR0001.GIF'
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
