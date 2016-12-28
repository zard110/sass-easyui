import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import 'easyui'

import './themes/bootstrap/theme'

angular.module('sass-easyui', [
  uiRouter,
  ngResource
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/button');

  var buttonState = {
    name: 'button',
    url: '/button',
    templateUrl: '/src/modules/button/button.html'
  };

  $stateProvider.state(buttonState);

}]);
