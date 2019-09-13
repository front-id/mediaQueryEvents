/* ====================================================
 * jQuery Media Query Events.
 * https://github.com/frontid/mediaQueryEvents
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */
!function ($) {
  'use strict';

  let singleton;

  const MediaQueryEventsClass = function ($el, options) {
    singleton = this;
    this.$el = $el;
    this.options = $.extend({}, options);
    this.map();
  };

  MediaQueryEventsClass.prototype = {

    /**
     * Map each defined breakpoint with a listener.
     */
    map: function () {
      const self = this;

      for (let brkNameSpace in self.options.breakpoints) {
        // Create the matchMedia and init.
        const mql = window.matchMedia(self.options.breakpoints[brkNameSpace]);

        const listener = function (e) {
          if (e.matches) {
            self._fire(brkNameSpace);
          }
        };

        mql.addListener(listener);

        // Since the listener will not get triggered
        // on init we make an initial check.
        if (mql.matches) {
          // Wait document gets ready and all handlers are
          // attached to the elements.
          $(document).ready(function () {
            self._fire(brkNameSpace);
          });
        }

      }
    },

    _fire: function (brkNameSpace) {
      const self = this;
      self.$el.trigger('mq.' + brkNameSpace);
    },


  };


  // Jquery plugin definition.
  //-----------------------------------------------------------
  $.fn.mediaQueryEvents = function (options) {
    const $el = $(this);
    const instance = new MediaQueryEventsClass($el, options);
    $el.data('MediaQueryEventsClass', instance);
  }

}(window.jQuery);
