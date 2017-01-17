import ng from 'angular'
import $ from 'jquery'

export default
  ng.module('menu.controller', [])
    .controller('MenuController', ['$timeout', MenuController])
    .name;

function MenuController($timeout) {
  $timeout(function() {
    $('#menu_1').menu('show', {
      left: 200,
      top: 10
    });
  }, 100);
}
