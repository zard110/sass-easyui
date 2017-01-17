import $ from 'jquery'
import 'easyui'

import 'iconfont'

import './bootstrap-custom.css'

// TODO 反色、labeled、文字 button
import './linkbutton.scss'

// TODO 替换下拉箭头图标
import './menubutton.scss'
import './splitbutton.scss'
import './panel.scss'
import './layout.scss'

// TODO 固定列未测试
import './datagrid.scss'

// TODO 替换图标
import './pagination.scss'

// TODO 在没有统一图标前，暂时隐藏了文件图标的显示
import './tree.scss'

import './tabs.scss'

import './textbox.scss'
import './form.scss'
import './combo.scss'
import './accordion.scss'
import './menu.scss'
import './window.scss'

// TODO messager中的show窗口没有特殊的标记和普通窗口区分
import './messager.scss'

$.parser.auto = false;

// 修改按钮默认大小
[
  $.fn.linkbutton.defaults,
  $.fn.menubutton.defaults,
  $.fn.splitbutton.defaults
].map(function(defaults) {
  $.extend(defaults, {
    size: 'medium',
    plain: false
  });
});

// FIXME panel的footer没有设定宽度
// FIXME 有footer时panel-body加panel-no-bottom的名字容易让人误解


[
  $.fn.datagrid.defaults,
  $.fn.treegrid.defaults
].map(function(defaults) {
  $.extend(defaults, {
    fitColumns: true,
    autoRowHeight: false,
    striped: true,
    method: 'GET'
  });
});

[
  $.fn.textbox.defaults,
  $.fn.combobox.defaults,
  $.fn.combotree.defaults,
  $.fn.combogrid.defaults,
  $.fn.combotreegrid.defaults,
  $.fn.numberbox.defaults,
  $.fn.datebox.defaults,
  $.fn.datetimebox.defaults,
  $.fn.timespinner.defaults,
  $.fn.datetimespinner.defaults,
  $.fn.numberspinner.defaults,
  $.fn.passwordbox.defaults,
  $.fn.filebox.defaults,
  $.fn.tagbox.defaults,
  $.fn.slider.defaults
].map(function(defaults) {
  $.extend(defaults, {
    height: 34
  });
});

[
  $.fn.combobox.defaults,
  $.fn.combotree.defaults,
  $.fn.combogrid.defaults,
  $.fn.combotreegrid.defaults,
].map(function(defaults) {
  $.extend(defaults, {
    editable: false,
    prompt: '——请选择——'
  });
});

[
  $.fn.tabs.defaults
].map(function(defaults) {
  $.extend(defaults, {
    tabHeight: 42,
    plain: true
  });
});

[
  $.fn.menu.defaults
].map(function(defaults) {
  $.extend(defaults, {
    itemHeight: 24
  });
});



