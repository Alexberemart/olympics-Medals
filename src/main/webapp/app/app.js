angular
    .module('starterApp', ['ui.router', 'ngMaterial', 'ngMessages', 'users', 'countries', 'medals'])
    .config(['$mdThemingProvider', '$mdIconProvider', '$stateProvider', '$urlRouterProvider', function ($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider) {

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                abstract: true,   //marca este estado como no navegable.
                views: {
                    head: {
                        templateUrl: './src/main/webapp/app/src/head-menu/head-menu.html',
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
                        templateUrl: './src/main/webapp/app/src/main/head-menu.html',
                        controller: 'head-menu'
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

        $urlRouterProvider.otherwise('/dashboard/main');

    }]);