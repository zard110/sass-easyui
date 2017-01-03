import $ from 'jquery'
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'

import 'jquery.nicescroll'
import './modules/icon'
import './themes/bootstrap/theme'

import Tree from './modules/tree'
import Treegrid from './modules/treegrid'

angular.module('sass-easyui', [
  uiRouter,
  ngResource,

  Tree,
  Treegrid
])
  .config(['$stateProvider', '$urlRouterProvider', uiRouterConfig])
  .controller('MainController', ['$rootScope', '$timeout', MainController]);

//$(function() {
//  $('#container').niceScroll();
//});

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

  const formState = {
    name: 'form',
    url: '/form',
    templateUrl: '/src/modules/form/form.html'
  };

  const panelState = {
    name: 'panel',
    url: '/panel',
    templateUrl: '/src/modules/panel/panel.html'
  };

  const tabsState = {
    name: 'tabs',
    url: '/tabs',
    templateUrl: '/src/modules/tabs/tabs.html'
  };

  const datagridState = {
    name: 'datagrid',
    url: '/datagrid',
    templateUrl: '/src/modules/datagrid/datagrid.html'
  };

  const treeState = {
    name: 'tree',
    url: '/tree',
    templateUrl: '/src/modules/tree/tree.html',
    controller: 'TreeController'
  };

  const treegridState = {
    name: 'treegrid',
    url: '/treegrid',
    templateUrl: '/src/modules/treegrid/treegrid.html',
    controller: 'TreegridController'
  };

  $stateProvider.state(iconState);
  $stateProvider.state(buttonState);
  $stateProvider.state(formState);
  $stateProvider.state(panelState);
  $stateProvider.state(tabsState);
  $stateProvider.state(datagridState);
  $stateProvider.state(treeState);
  $stateProvider.state(treegridState);
}


