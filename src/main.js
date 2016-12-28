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

  const iconState = {
    name: 'icon',
    url: '/icon',
    templateUrl: '/src/modules/icon/icon.html'
  };

  const buttonState = {
    name: 'button',
    url: '/button',
    templateUrl: '/src/modules/button/button.html'
  };

  const datagridState = {
    name: 'datagrid',
    url: '/datagrid',
    templateUrl: '/src/modules/datagrid/datagrid.html'
  };


  $stateProvider.state(iconState);
  $stateProvider.state(buttonState);
  $stateProvider.state(datagridState);

}]);
