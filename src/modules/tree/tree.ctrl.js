import ng from 'angular'
import $ from 'jquery'

import TreeAPI from './tree.api.js'

export default ng.module('tree.controller', [TreeAPI])
  .controller('TreeController', ['TreeAPI', TreeController])
  .name;

function TreeController(TreeAPI) {

  TreeAPI.query().$promise
    .then(function (data) {
      $('#t1').tree('loadData', data);
    });

}
