import ng from 'angular'
import $ from 'jquery'

import TreeAPI from './tree.api.js'

export default ng.module('tree.controller', [TreeAPI])
  .controller('TreeController', ['TreeAPI', TreeController])
  .name;

function TreeController(TreeAPI) {

  TreeAPI.query().$promise
    .then(function (data) {
      console.log($('#tree_basic'));
      $('#tree_basic').tree('loadData', data);
    });

}
