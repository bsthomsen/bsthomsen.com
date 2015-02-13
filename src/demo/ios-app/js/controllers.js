angular
.module('expatter.controllers', [])

.controller('MainCtrl', function($scope) {

	$scope.menuitems = [
		{
			name: 'Messenger',
			target: 'messenger'
		},
		{
			name: 'Settings',
			target: 'settings'
		},
		{
			name: 'Log out',
			target: 'log-out'
		}
	];


})

.controller('LoginCtrl', function ($scope) {

	

})