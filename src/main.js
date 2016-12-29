import $ from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import './modules/icon'

import './themes/bootstrap/theme'

angular.module('sass-easyui', [
  uiRouter,
  ngResource
])
  .config(['$stateProvider', '$urlRouterProvider', uiRouterConfig])
  .controller('MainController', ['$rootScope', '$timeout', MainController]);

function MainController ($rootScope, $timeout) {
  $rootScope.$on('$stateChangeSuccess', function() {
    $timeout(function() {
      $.parser.parse($('#container'));
    }, 0);
  });
}

function uiRouterConfig ($stateProvider, $urlRouterProvider) {
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

  const panelState = {
    name: 'panel',
    url: '/panel',
    templateUrl: '/src/modules/panel/panel.html'
  };

  const datagridState = {
    name: 'datagrid',
    url: '/datagrid',
    templateUrl: '/src/modules/datagrid/datagrid.html'
  };
  $stateProvider.state(iconState);
  $stateProvider.state(buttonState);
  $stateProvider.state(panelState);
  $stateProvider.state(datagridState);
}


