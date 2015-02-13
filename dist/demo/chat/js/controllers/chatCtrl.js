'use strict';

camchat.controller('ChatCtrl', ['$rootScope','$scope', '$location', '$firebase', '$firebaseSimpleLogin', function ($rootScope, $scope, $location, $firebase, $firebaseSimpleLogin) {

	$scope.loginObj = $firebaseSimpleLogin(new Firebase(firebaseUrl));

	$scope.users = $firebase(new Firebase(firebaseUrl + 'user-names-online'));
	$scope.users.$bind($scope, "users");
	$scope.messages	= $firebase(new Firebase(firebaseUrl + 'messages'));
	$scope.messages.$bind($scope, "messages");

	$scope.loginObj.$getCurrentUser().then(function (user) {
		if(user !== null)
		{
			$scope.users.$add({userId: user.id, name : user.username, state : 'active'});
		}
	});


	$scope.$on('$locationChangeStart', function (event, next, current) {
        $scope.changeUserState();
    });
    $scope.$on('$stateChangeStart', function (event, next, current) {
        $scope.changeUserState();
    });
    window.onbeforeunload = function () {
    	$scope.changeUserState();
	}
	window.onblur = function () {
    	$scope.changeUserState('inactive');
	}
	window.onfocus = function () {
    	$scope.changeUserState('active');
	}

	$scope.changeUserState = function (state) {
		if(!$scope.loginObj.user)
			return;

		for(var userId in $scope.users){
			
			if($scope.users[userId].name === $scope.loginObj.user.username) {
				
				if(state === undefined)
				{
					$scope.users.$remove(userId);
					//console.log("removed: " + userId + " " + $scope.users[userId]);
				}
				else
				{
					$scope.users[userId].state = state;
					$scope.users.$save(userId);
				}
			}
		}
	}

	$scope.addMessage = function (message) {
        $scope.messages.$add({userId: $scope.loginObj.user.id, name: $scope.loginObj.user.username, 'message': message, timestamp: new Date().getTime()});
	}

}]);