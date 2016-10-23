angular.module('olympic-medals')
    .factory('urlConstantsFact', function () {

        //var prefix = 'http://192.168.1.254:8080/HT/Services';
        //var prefix = 'http://localhost:8080/htultimate/rest';
        //var prefix2 = 'http://someone:mypass@localhost:8080/htultimate/rest';
        var prefix = '/olympic-medals/rest';
        //var prefix = 'http://alexberemart.synology.me:8080/HT/Services';

        return{
            /**
             * @return {string}
             */
            SAVE_RESULT: function () {
                return prefix + '/result';
            },
            /**
             * @return {string}
             */
            SAVE_COUNTRY: function () {
                return prefix + '/country';
            }
        };
    });
