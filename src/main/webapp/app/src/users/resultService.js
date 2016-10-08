(function () {
    'use strict';

    angular.module('users')
        .service('resultService', ['$q', 'countryService', 'urlConstantsFact', '$http', resultService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function resultService($q, countryService, urlConstantsFact, $http) {

        var results = [
            {
                sport: 'Athletics',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medalId: 1,
                        name: 'Usain Bolt',
                        countryId: 1
                    },
                    {
                        medalId: 2,
                        name: 'Justin Gatlin',
                        countryId: 2
                    },
                    {
                        medalId: 3,
                        name: 'Andre De Grasse',
                        countryId: 3
                    }
                ]
            },
            {
                sport: 'Athletics',
                event: '200 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medalId: 1,
                        name: 'Usain Bolt',
                        countryId: 1
                    },
                    {
                        medalId: 2,
                        name: 'Andre De Grasse',
                        countryId: 3
                    },
                    {
                        medalId: 3,
                        name: 'Christophe Lemaitre',
                        countryId: 4
                    }
                ]
            },
            {
                sport: 'Athletics',
                event: '100 m.',
                male: false,
                female: true,
                medals: [
                    {
                        medalId: 1,
                        name: 'Elaine Thompson',
                        countryId: 1
                    },
                    {
                        medalId: 2,
                        name: 'Tori Bowie',
                        countryId: 2
                    },
                    {
                        medalId: 3,
                        name: 'Shelly-Ann Fraser-Pryce',
                        countryId: 1
                    }
                ]
            },
            {
                sport: 'Judo',
                event: 'Extra-lightweight (60 kg)',
                male: true,
                female: false,
                medals: [
                    {
                        medalId: 1,
                        name: 'Beslan Mudranov',
                        countryId: 5
                    },
                    {
                        medalId: 2,
                        name: 'Yeldos Smetov',
                        countryId: 6
                    },
                    {
                        medalId: 3,
                        name: 'Naohisa Takato',
                        countryId: 7
                    },
                    {
                        medalId: 3,
                        name: 'Diyorbek Urozboev',
                        countryId: 8
                    }
                ]
            },
            {
                sport: 'Swimming',
                event: '50 m freestyle',
                male: false,
                female: true,
                medals: [
                    {
                        medalId: 1,
                        name: 'Pernille Blume',
                        countryId: 9
                    },
                    {
                        medalId: 2,
                        name: 'Simone Manuel',
                        countryId: 2
                    },
                    {
                        medalId: 3,
                        name: 'Aliaksandra Herasimenia',
                        countryId: 10
                    }
                ]
            },
            {
                sport: 'Swimming',
                event: '100 m freestyle',
                male: false,
                female: true,
                medals: [
                    {
                        medalId: 1,
                        name: 'Simone Manuel',
                        countryId: 2
                    },
                    {
                        medalId: 1,
                        name: 'Penny Oleksiak',
                        countryId: 3
                    },
                    {
                        medalId: 3,
                        name: 'Sarah Sjöström',
                        countryId: 11
                    }
                ]
            },
            {
                sport: 'Archery',
                event: 'Men\'s individual',
                male: true,
                female: false,
                medals: [
                    {
                        medalId: 1,
                        name: 'Ku Bon-chan',
                        countryId: 12
                    },
                    {
                        medalId: 2,
                        name: 'Jean-Charles Valladont',
                        countryId: 4
                    },
                    {
                        medalId: 3,
                        name: 'Brady Ellison',
                        countryId: 2
                    }
                ]
            }
        ];

        var users = [
            {
                value: 'lia lugo',
                name: 'Rio 2016',
                avatar: 'svg-1',
                content: 'contenido de rio 2016'
            },
            {
                value: 'george duke',
                name: 'London 2012',
                avatar: 'svg-2',
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
            loadAllMedals: function () {
                // Simulate async nature of real remote calls
                return $q.when(results);
            },
            addResult: function(result){
                results.push(result);

                var resultToSave = {
                    sport: result.sport,
                    event: result.event,
                    male: result.male,
                    female: result.female,
                };

                $http.post(urlConstantsFact.SAVE_RESULT(), resultToSave);
            }
        };
    }

})();
