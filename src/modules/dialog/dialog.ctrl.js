import ng from 'angular'
import $ from 'jquery'

export default ng.module('dialog.controller', [])
  .controller("DialogController", ['$timeout', DialogController])
  .name;

function DialogController($timeout) {
  $timeout(function() {
    $('#dialog').dialog({
      title: 'My Dialog',
      width: 400,
      height: 200,
      closed: false,
      cache: false,
      modal: true,
      buttons: '#dialog_buttons'
    });
  }, 100)
}
