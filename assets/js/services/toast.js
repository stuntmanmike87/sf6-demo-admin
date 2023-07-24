import web from '@sulu/web';
import $ from "jquery";

/**
 * Service for display toast.
 * Documentation of Toast Bootstrap here: https://getbootstrap.com/docs/4.3/components/toasts/
 */
web.registerService('toast', {
    /**
     * @param title Title of toast popup.
     * @param body Content of toast popup.
     * @param position Define position of toast popup with "top-center" or "bottom-right" (default).
     * @param themeColor Define the theme color. Available: "black".
     * @return {*|jQuery}
     */
    show(title, body, position = 'bottom-right', themeColor = '') {
        const $document = $(document);
        const $oldToast = $document.find('.js-toast');
        let additionalClass = '';

        if (0 < $oldToast.length) {
            $oldToast.remove();
        }

        additionalClass = themeColor ? ` toast-${themeColor}`:'';

        const html = '<div class="toast' + additionalClass + ' --' + position + ' js-toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">' +
            '  <div class="toast-header">' +
            '    <strong class="mr-auto js-toast-title">' + title + '</strong>' +
            '    <small class="js-toast-title-small"></small>' +
            '    <button type="button" class="ml-2 mb-1 close js-toast-close" data-dismiss="toast" aria-label="Close">' +
            '      <span aria-hidden="true">&times;</span>' +
            '    </button>' +
            '  </div>' +
            '  <div class="toast-body js-toast-body">' + body + '</div>' +
            '</div>'

        $('body').append(html);

        const $newToast = $(document).find('.js-toast');
        $newToast.toast('show');

        return $newToast;
    }
});
