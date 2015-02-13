'use strict';
angular
.module('expatter.routes', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/profile', {
      templateUrl: 'views/main.html'
    })
    .when('/', {

    })
    .when('/messenger', {
      templateUrl: 'views/messenger/user-list.html'
    })
    .when('/messenger/:user', {
      templateUrl: 'views/messenger/chat.html'
    })

    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })

    .otherwise({redirectTo: '/profile'});
}]);
