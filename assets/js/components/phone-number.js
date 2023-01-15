import web from '@sulu/web';
import $ from 'jquery';

/**
 * PhoneNumber component.
 */
class PhoneNumber {
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {String} options.locale
     * @param {Object} options.translations
     * @param {String} options.translations.choose
     * @param {String} options.translations.usage
     * @param {String} options.translations.main
     * @param {String} options.translations.selectCountryCallingCode
     * @param {String} options.countryCallingCodes
     * @param {String} options.value
     * @param {String} options.locationCountryId
     * @param {String} options.prefixEntity
     * @param {String} options.label
     */
    initialize($el, options) {
        this.$el = $($el);
        this.options = options;

        this.countryCallingCodes = JSON.parse(this.options.countryCallingCodes);

        this.classDropdownCountryCallingCode = 'js-phone-number-dropdown-calling-code';

        this.displayPhoneNumberInput();
        this.setCallingCodeOnDropdown();

        this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
    bindEvents() {
        this.getDropdownCountryCallingCode().on('click', this.onUpdateCountryCallingCode.bind(this));
    }

    getDropdownCountryCallingCode() {
        return this.$el.find(`.${this.classDropdownCountryCallingCode}`);
    }

    /**
     * @param {Object} event
     */
    onUpdateCountryCallingCode(event) {
        event.preventDefault();

        const $country = $(event.currentTarget);

        this.$el.find('.js-phone-number-button-calling-code')
                .filter(`[data-index="${$country.data('index')}"]`)
                .html(this.getHTMLCountryAndCallingCode($country.data('alpha2'), $country.data('calling-code')))
                .attr('title', $country.data('name'));

        this.$el.find('[name="'+ this.options.prefixEntity +'[phone_number_country_id]"]').val($country.data('id'));
    }

    getHTMLCountryAndCallingCode(alpha2, callingCode) {
        return `${this.getHTMLCountryFlag(alpha2 ?? '')} <span class="text-black-50">${callingCode ?? ''} </span>`;
    }

    getHTMLCountryFlag(alpha2) {
        return `<span class="fi fi-${alpha2.toLowerCase()}"></span>`;
    }

    displayPhoneNumberInput() {
            const flags = {};
            const countryCallingCodes = this.countryCallingCodes.reduce((html, country) => {
                flags[country.id] = country.alpha2.toLowerCase();
                return html += `<a class="dropdown-item ${this.classDropdownCountryCallingCode}" href="#" data-name="${country.name}" data-calling-code="${country.callingCode}" data-alpha2="${country.alpha2.toLowerCase()}" data-id="${country.id}" data-index="0">${this.getHTMLCountryFlag(country.alpha2)} <span class="ml-1">${country.name}</span> <span class="text-black-50">${country.callingCode ?? ''}</span></a>`;
            }, '');

            let input = '<div class="form-group">' +
                '<label for="phone_number" class="control-label required">' + this.options.translations.label + '</label> ' +
                '<div class="input-group">' +
                '<div class="input-group-prepend">' +
                '<button class="btn btn-light dropdown-toggle form__dropdown-toggle-country-codes js-phone-number-button-calling-code" type="button" data-toggle="dropdown"' +
                'aria-haspopup="true" aria-expanded="false" data-index="0" title="' + this.options.translations.selectCountryCallingCode + '">' +
                '<i class="fas fa-globe text-black-50" aria-hidden="true"></i>' +
                '</button>' +
                '<div class="dropdown-menu form__dropdown-menu-country-codes">' +
                countryCallingCodes +
                '</div>' +
                '</div>' +
                '<input type="hidden" name="'+ this.options.prefixEntity +'[phone_number_country_id]" value="'+ this.options.locationCountryId + '">'+
                '<input type="text" id="phone_number" name="'+ this.options.prefixEntity +'[phone_number]" class="form-control" value="'+ this.options.value + '">'+
                '</div>' +
                '</div>';

        this.$el.html(input);
    }

    setCallingCodeOnDropdown() {
        const country = this.countryCallingCodes.find((country) => country.id === this.options.locationCountryId);
        
        if (country){
            this.$el.find('.js-phone-number-button-calling-code')
                .html(this.getHTMLCountryAndCallingCode(country.alpha2, country.callingCode))
                .attr('title', country.name);
        }
    }
}

web.registerComponent('phone-number', PhoneNumber);
