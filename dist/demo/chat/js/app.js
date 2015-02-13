var firebaseUrl = 'https://bsthomsen.firebaseio.com/chat/';

var camchat = angular.module('camchat',
[
	'ngRoute',
	'firebase'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
	    templateUrl: 'partials/chat.html',
	    controller: 'ChatCtrl'
  	})
    .otherwise({
        redirectTo:'/'
    });
}]);