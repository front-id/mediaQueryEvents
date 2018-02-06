/* ====================================================
 * jQuery Media Query Events.
 * https://github.com/front-id/mediaQueryEvents
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */
!function ($) {
  'use strict';

  var plugin;

  var Class = function (win, options) {
    plugin = this;
    this.$win = $(win);
    var defaults = {};
    this.options = $.extend(defaults, options);
    init();
    return this;
  };

  function init() {
    for (var brk in plugin.options.breakpoints) {
      // Create the matchMedia and init.
      var mql = window.matchMedia(plugin.options.breakpoints[brk]);

      // Listen.
      var listener = function (breakpointName) {
        return function (e) {
          if (e.matches) {
            plugin.$win.trigger('mq.' + breakpointName)
          }
        }
      };

      mql.addListener(listener(brk));

      // Since the listener will not get triggered
      // on init we make an initial check.
      if (mql.matches) {
        plugin.$win.trigger('mq.' + brk)
      }

    }

  }

  // DEFINICIÓN DEL PLUGIN
  //-----------------------------------------------------------
  $.fn.mediaQueryEvents = function (options) {
    return this.each(function () {
      var $element = $(this);
      var data = $element.data('mediaQueryEvents');
      if (!data) {
        $element.data('mediaQueryEvents', (new Class(this, options)))
      }
    })
  }

}(window.jQuery);