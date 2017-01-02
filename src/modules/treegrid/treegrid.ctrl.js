import ng from 'angular'
import $ from 'jquery'

import TreeAPI from '../tree/tree.api.js'

export default ng.module('treegrid.controller', [TreeAPI])
  .controller('TreegridController', ['TreeAPI', TreegridController])
  .name;

function TreegridController(TreeAPI) {

  TreeAPI.query().$promise
    .then(function (data) {
      $('#treegrid_basic').treegrid('loadData', data);
    });

}
