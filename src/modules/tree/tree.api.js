import ng from 'angular'
import ngResource from 'angular-resource'

export default
  ng.module('tree.api', [ngResource])
    .factory('TreeAPI', ['$resource', TreeAPI])
    .name;

function TreeAPI($resource) {
  return $resource('src/modules/tree/tree.json');
}
