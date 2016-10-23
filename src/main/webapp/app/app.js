angular
    .module('starterApp', ['ui.router', 'ngMaterial', 'ngMessages', 'users', 'countries', 'medals'])
    .config(['$mdThemingProvider', '$mdIconProvider', '$stateProvider', '$urlRouterProvider', function ($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider) {

        $mdIconProvider
            .defaultIconSet("app/components/css/svg/avatars.svg", 128)
            .icon("menu", "app/components/css/svg/menu.svg", 24)
            .icon("share", "app/components/css/svg/share.svg", 24)
            .icon("google_plus", "app/components/css/svg/google_plus.svg", 512)
            .icon("hangouts", "app/components/css/svg/hangouts.svg", 512)
            .icon("twitter", "app/components/css/svg/twitter.svg", 512)
            .icon("phone", "app/components/css/svg/phone.svg", 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                abstract: true,   //marca este estado como no navegable.
                views: {
                    head: {
                        templateUrl: 'app/src/head-menu/head-menu.html',
                        controller: 'head-menu'
                    },
                    content: {
                        template: '<div ui-view="dashboardContent"></div>'
                    }
                }
            })
            .state('dashboard.main', {
                url: '/main',
                views: {
                    dashboardContent: {
                        templateUrl: 'app/src/main/main.html',
                        controller: 'mainCtrl'
                    }
                }
            })
            .state('dashboard.result', {
                url: '/result',
                views: {
                    dashboardContent: {
                        templateUrl: 'results/results.html',
                        controller: 'results'
                    }
                }
            })
            .state('dashboard.countries', {
                url: '/countries',
                views: {
                    dashboardContent: {
                        templateUrl: 'app/src/country/countries.html',
                        controller: 'countryCtrl'
                    }
                }
            })

        $urlRouterProvider.otherwise('/dashboard/main');

    }]);