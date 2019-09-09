$(function () {

  // Define here the elements and the positions will
  // take for each breakpoint. False means original position.
  new DOMElementRelocation(
    {
      breakpoints: {
        desk: '(min-width: 1230px)',
        tab: '(min-width: 768px) and (max-width: 1229px)',
        mob: '(min-width: 320px) and (max-width: 767px)',
        reallySmall: '(min-width: 0px) and (max-width: 319px)'
      },
      elements: [
        {
          element: '.search-form',
          reallySmall: '.sample-page > footer',
          mob: '.sample-page > .region-sidebar-right',
          tab: '.region-sidebar-left',
          desk: '.sample-page > header'
        },
        {
          element: '.logo',
          reallySmall: '.sample-page > footer',
          mob: false,
          tab: '.region-sidebar-left',
          desk: false,
        }
      ]
    });

});