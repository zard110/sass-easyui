import $ from 'jquery'
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'

import 'jquery.nicescroll'
import './modules/icon'
import './themes/bootstrap'

import Tree from './modules/tree'
import Treegrid from './modules/treegrid'
import Form from './modules/form'
import Menu from './modules/menu'
import Dialog from './modules/dialog'

angular.module('sass-easyui', [
  uiRouter,
  ngResource,

  Tree,
  Treegrid,
  Form,
  Menu,
  Dialog
])
  .config(['$stateProvider', '$urlRouterProvider', uiRouterConfig])
  .controller('MainController', ['$rootScope', '$timeout', MainController]);

$.parser.onComplete = function() {
  $('#container').niceScroll({
    cursorcolor: '#ddd'
  });
};

$(function() {
  $.parser.parse();
  $.parser.onComplete = $.noop;
  $.parser.initialized = true;
});

function MainController ($rootScope, $timeout) {
  $rootScope.$on('$stateChangeSuccess', function() {
    if (!$.parser.initialized) return;
    $timeout(function() {
      $.parser.parse($('#container'));
    }, 10);
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
    templateUrl: '/src/modules/form/form.html',
    controller: 'FormController'
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

  const menuState = {
    name: 'menu',
    url: '/menu',
    templateUrl: '/src/modules/menu/menu.html',
    controller: 'MenuController'
  };

  const dialogState = {
    name: 'dialog',
    url: '/dialog',
    templateUrl: '/src/modules/dialog/dialog.html',
    controller: 'DialogController'
  };

  $stateProvider.state(iconState);
  $stateProvider.state(buttonState);
  $stateProvider.state(formState);
  $stateProvider.state(panelState);
  $stateProvider.state(tabsState);
  $stateProvider.state(datagridState);
  $stateProvider.state(treeState);
  $stateProvider.state(treegridState);
  $stateProvider.state(menuState);
  $stateProvider.state(dialogState);
}


