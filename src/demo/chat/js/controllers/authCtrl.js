'use strict';

camchat.controller('AuthCtrl', ['$scope', '$firebaseSimpleLogin', function ($scope, $firebaseSimpleLogin) {
	$scope.loginObj = $firebaseSimpleLogin(new Firebase(firebaseUrl));
}]);