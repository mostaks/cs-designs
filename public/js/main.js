/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-tabs */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable wrap-iife */
(function ($) {
  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
  });

  $(function () {
    const	$window = $(window);
    const $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function () {
      window.setTimeout(function () {
        $body.removeClass('is-loading');
      }, 1000);
    });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function () {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active,
      );
    });

    // Scrolly.
    $('.scrolly').scrolly();

    // Gallery.
    $('.gallery').each(function () {
      const	$gallery = $(this);
      const $content = $gallery.find('.content');

      // Poptrox.
      $content.poptrox({
        usePopupCaption: true,
      });

      // Tabs.
      $gallery.each(function () {
        const $this = $(this);
        const $tabs = $this.find('.tabs a');
        const $media = $this.find('.media');

        $tabs.on('click', function (e) {
          const $this = $(this);
          const tag = $this.data('tag');

          // Prevent default.
          e.preventDefault();

          // Remove active class from all tabs.
          $tabs.removeClass('active');

          // Reapply active class to current tab.
          $this.addClass('active');

          // Hide media that do not have the same class as the clicked tab.
          $media
            .fadeOut('fast')
            .each(function () {
              const $this = $(this);

              if ($this.hasClass(tag)) {
                $this
                  .fadeOut('fast')
                  .delay(200)
                  .queue(function (next) {
                    $this.fadeIn();
                    next();
                  });
              }
            });
        });
      });
    });
  });
})(jQuery);
