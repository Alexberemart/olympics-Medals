(function () {
    'use strict';

    angular.module('olympic-medals')
        .service('resultService', ['$q', 'urlConstantsFact', '$http', resultService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function resultService($q, urlConstantsFact, $http) {

        var users = [
            {
                value: 'lia lugo',
                name: 'Rio 2016',
                avatar: 'app/images/2016_Summer_Olympics_logo.png',
                content: 'contenido de rio 2016'
            },
            {
                value: 'george duke',
                name: 'London 2012',
                avatar: 'app/images/london-2012-olympics-logo.jpg',
                content: 'contenido de rio 2016'
            }
        ];

        var sports = [
            {
                value: 'lia lugo',
                name: 'Athletics',
                avatar: 'svg-1',
                content: 'contenido de rio 2016'
            },
            {
                value: 'george duke',
                name: 'Archery',
                avatar: 'svg-2',
                content: 'contenido de rio 2016'
            },
            {
                value: 'george duke',
                name: 'Swimming',
                avatar: 'svg-2',
                content: 'contenido de rio 2016'
            }
        ];

        // Promise-based API
        return {
            loadAllUsers: function () {
                // Simulate async nature of real remote calls
                return $q.when(users);
            },
            loadAllSports: function () {
                // Simulate async nature of real remote calls
                return $q.when(sports);
            },
            loadAllResults: function () {
                return $http.get(urlConstantsFact.SAVE_RESULT());
            },
            addResult: function(result){
                var resultToSave = {
                    sport: result.sport,
                    event: result.event,
                    male: result.male,
                    female: result.female,
                    medals: result.medals
                };

                return $http.post(urlConstantsFact.SAVE_RESULT(), resultToSave);
            },
            deleteResult: function (result) {
                return $http.delete(urlConstantsFact.SAVE_RESULT() + '/' + result.id);
            }
        };
    }

})();
