import ng from 'angular'
import ngResource from 'angular-resource'

export default
  ng.module('language.api', [ngResource])
    .factory('LanguageAPI', ['$resource', LanguageAPI])
    .name;

function LanguageAPI($resource) {
  return $resource('src/modules/form/language.json');
}
