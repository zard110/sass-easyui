import ng from 'angular'
import $ from 'jquery'

import LanguageAPI from './language.api.js'

export default
  ng.module('form.controller', [LanguageAPI])
    .controller('FormController', FormController)
    .name;

function FormController(LanguageAPI) {

  LanguageAPI.query()
    .$promise
    .then(function(language) {
      $('#form_combobox').combobox('loadData', language);
    });

}
