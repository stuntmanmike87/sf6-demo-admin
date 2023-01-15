import web from '@sulu/web';
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepickerLocale from '../constants/locale-datepicker';

/**
 * Datepicker component.
 */
class Datepicker {
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {string} options.locale
     * @param {boolean} options.changeMonth
     * @param {boolean} options.changeYear
     */
    initialize($el, options) {
        this.options = options;
        this.$el = $($el);
        this.$datepicker = this.$el.find('.js-datepicker');
        this.$uiDatepicker = $('div.ui-datepicker');

        this.initFormDatepicker();
        this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
    bindEvents() {
        this.$uiDatepicker.on('click', this.onClickDatepicker.bind(this));
    }

    /**
     * Initialize datepicker.
     */
    initFormDatepicker() {
        datepickerFactory($);

        if (this.options.locale) {
            datepickerLocale[this.options.locale].factory($);
        }

        this.$datepicker.datepicker({
            changeMonth: this.options.changeMonth ?? false,
            changeYear: this.options.changeYear ?? false
        });
    }

    /**
     * Handle click on calendar will set same width from input.
     *
     * @param {Object} event
     */
    onClickDatepicker(event) {
        $(event.currentTarget).outerWidth(this.$datepicker.outerWidth());
    }
}

web.registerComponent('datepicker', Datepicker);
