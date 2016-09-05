(function () {
    'use strict';

    angular.module('users')
        .service('resultService', ['$q', resultService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function resultService($q) {

        var results = [
            {
                sport: 'Athletics',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-gold-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Usain Bolt',
                        photoUrl: './src/main/webapp/app/images/JAMA0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-silver-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Justin Gatlin',
                        photoUrl: './src/main/webapp/app/images/UNST0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-bronze-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Andre De Grasse',
                        photoUrl: './src/main/webapp/app/images/CANA0001.gif'
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
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-gold-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Usain Bolt',
                        photoUrl: './src/main/webapp/app/images/JAMA0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-silver-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Andre De Grasse',
                        photoUrl: './src/main/webapp/app/images/CANA0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-bronze-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Christophe Lemaitre',
                        photoUrl: './src/main/webapp/app/images/FRAN0001.gif'
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
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-gold-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Beslan Mudranov',
                        photoUrl: './src/main/webapp/app/images/RUSS0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-silver-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Yeldos Smetov',
                        photoUrl: './src/main/webapp/app/images/KAZK0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-bronze-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Naohisa Takato',
                        photoUrl: './src/main/webapp/app/images/JAPA0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-bronze-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Diyorbek Urozboev',
                        photoUrl: './src/main/webapp/app/images/UZBK0001.gif'
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
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-gold-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Pernille Blume',
                        photoUrl: './src/main/webapp/app/images/RUSS0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-silver-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Simone Manuel',
                        photoUrl: './src/main/webapp/app/images/KAZK0001.gif'
                    },
                    {
                        medal: './src/main/webapp/app/images/pict--olympic-medal,-bronze-winter-olympics-pictograms-vector-stencils-library.png',
                        name: 'Aliaksandra Herasimenia',
                        photoUrl: './src/main/webapp/app/images/JAPA0001.gif'
                    }
                ]
            },
            {
                sport: 'Athletics',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    }
                ]
            },
            {
                sport: 'Athletics',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    }
                ]
            },
            {
                sport: 'Athletics',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    }
                ]
            },
            {
                sport: 'Athletics',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    }
                ]
            },
            {
                sport: 'Athletics',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    }
                ]
            },
            {
                sport: 'Archery',
                event: '100 m.',
                male: true,
                female: false,
                medals: [
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
                    },
                    {
                        medal: './src/main/webapp/app/images/goldMedal.jpg',
                        name: 'Alejandro',
                        photoUrl: './src/main/webapp/app/images/spain.png'
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
            }
        };
    }

})();
