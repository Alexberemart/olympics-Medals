(function () {
    'use strict';

    angular.module('countries')
        .service('countryService', ['$http', 'urlConstantsFact', countryService]);

    function countryService($http, urlConstantsFact) {

        // Promise-based API
        return {
            getCountry: function (countryId) {
                return $http.get(urlConstantsFact.SAVE_COUNTRY() + '/' + countryId);
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
