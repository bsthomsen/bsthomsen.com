'use strict';

camchat
.directive('camchatTextarea', function() {
	return function ($scope, elem, attrs) {
        elem.bind("keydown keypress", function (event) {
            if(event.which === 13) {
            	if(elem.val().length)
            	{
        			$scope.addMessage(elem.val());
            		elem.val("");
            	}
                event.preventDefault();
            }
        });
    };
});