import $ from 'jquery'
import 'easyui'

import 'iconfont'

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



