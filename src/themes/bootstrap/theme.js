import $ from 'jquery'
import 'easyui'

import 'iconfont'

import './linkbutton.scss'
import './menubutton.scss'
import './splitbutton.scss'
import './panel.scss'
import './layout.scss'
import './datagrid.scss'
import './pagination.scss'

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
  $.fn.datagrid.defaults
].map(function(defaults) {
  $.extend(defaults, {
    fitColumns: true,
    autoRowHeight: false,
    striped: true,
    method: 'GET'
  });
});

[
  $.fn.tree.defaults
].map(function(defaults) {
    $.extend(defaults, {
      lines: true
    });
  });


