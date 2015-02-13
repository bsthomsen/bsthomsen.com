'use strict';

angular.module('expatter.config', [])

.constant('version', '0.6')

.constant('loginRedirectPath', '/login')

.constant('FBURL', 'https://bsthomsen.firebaseio.com/expatter')

.config(['snapRemoteProvider', function (snapRemoteProvider){
  snapRemoteProvider.globalOptions.disable = 'right';
}])