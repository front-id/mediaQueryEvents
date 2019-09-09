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
            self.fire(brkNameSpace);
          }
        };

        mql.addListener(listener);

        // Since the listener will not get triggered
        // on init we make an initial check.
        if (mql.matches) {
          self.fire(brkNameSpace);
        }

      }
    },

    fire: function (brkNameSpace) {
      const self = this;
      self.$el.trigger('mq.' + brkNameSpace);
    },

    /**
     * Updated the plugin with new definitions.
     *
     * This happens when a dom elements gets this plugin attached more than once.
     * In this case we just add the new breakpoints to the stack.
     *
     * @param options
     */
    update: function (options) {
      const self = this;
      this.options = $.extend(self.options, options);
      self.map();
    }

  };


  // Jquery plugin definition.
  //-----------------------------------------------------------
  $.fn.mediaQueryEvents2 = function (options) {
    const $el = $(this);
    let instance;

    if (singleton !== undefined) {
      singleton.update(options);
      instance = singleton;
    }
    else {
      instance = new MediaQueryEventsClass($el, options);
    }

    $el.data('MediaQueryEventsClass', instance);
  }

}(window.jQuery);

