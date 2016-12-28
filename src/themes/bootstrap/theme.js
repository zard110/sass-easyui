import $ from 'jquery'
import 'easyui'

import 'iconfont'

import './linkbutton.scss'
import './menubutton.scss'

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
