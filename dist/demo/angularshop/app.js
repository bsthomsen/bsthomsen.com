'use strict';
var angularShop = angular.module('AngularShop', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/catalog.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);