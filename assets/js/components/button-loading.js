import web from '@sulu/web';
import $ from 'jquery';
import HTML from "../constants/html";
const HEIGHT_LOADING_ICON = '1.5rem';

/**
 * ButtonLoading component.
 */
class ButtonLoading {
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {String} options.heightLoadingIcon
     */
    initialize($el, options) {
        this.$el = $($el);
        this.options = options;

        this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
    bindEvents() {
        this.$el.on('click', this.showLoading.bind(this));
    }

    showLoading() {
        let heightLoadingIcon = this.options.heightLoadingIcon ?? HEIGHT_LOADING_ICON;

        this.$el.find('.js-button-loading-icon').remove();
        this.$el.prepend($(HTML.LOADING_DUAL_RING_WHITE).addClass('js-button-loading-icon mr-2').attr({'style': `height:${heightLoadingIcon};`}));

        this.$el.find('.js-button-loading--removing').hide();
    }
}

web.registerComponent('button-loading', ButtonLoading);
