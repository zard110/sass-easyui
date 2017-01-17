import ng from 'angular'
import $ from 'jquery'

export default ng.module('messager.controller', [])
  .controller('MessagerController', ['$timeout', MessagerController])
  .name;

function MessagerController($timeout) {
  $timeout(function() {

    $('#messager_show').on('click', showMessager);
    $('#messager_alert').on('click', alertMessager);
    $('#messager_confirm').on('click', confirmMessager);
    $('#messager_prompt').on('click', promptMessager);
    $('#messager_progress').on('click', progressMessager);

    $('#messager_alert_info').on('click', alertInfo);
    $('#messager_alert_warning').on('click', alertWarning);
    $('#messager_alert_error').on('click', alertError);


  }, 100);
}

function alertInfo() {
  $.messager.alert('My Title','Here is a info message!','info');
}

function alertWarning() {
  $.messager.alert('My Title','Here is a warning message!','warning');
}

function alertError() {
  $.messager.alert('My Title','Here is a error message!','error');
}

function showMessager() {
  $.messager.show({
    title:'My Title',
    msg:'Message will be closed after 5 seconds.',
    timeout:0,
    showType:'slide'
  });
}

function alertMessager() {
  $.messager.alert({
    title: 'My Title',
    msg: 'Here is a message!',
    fn: function(){
      alert('ok');
    }
  });
}

function confirmMessager() {
  $.messager.confirm({
    title: 'My Title',
    msg: 'Are you confirm this?',
    fn: function(r){
      if (r){
        alert('ok');
      }
    }
  });
}

function promptMessager() {
  $.messager.prompt({
    title: 'Prompt',
    msg: 'Please enter your name:',
    fn: function(r){
      if (r){
        alert('Your name is:' + r);
      }
    }
  });
}

function progressMessager() {
  $.messager.progress();

  setTimeout(function() {
    $.messager.progress('close');
  }, 2000)
}
