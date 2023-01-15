import web from '@sulu/web';
import $ from 'jquery';
import CLASSES from '../constants/classes';
import ROUTES from "../constants/routes";
import HTML from "../constants/html";

/**
 * Address information component is a feature where have all script for address information in a form.
 */
class AddressInformation {
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {String} options.locale
     * @param {String} options.apiToken
     * @param {String} options.apiKey
     */
    initialize($el, options) {
        this.$el = $($el);
        this.$body = $('body');
        this.options = options;

        this.marker = null;
        this.googleResults = {};
        this.classCountry = '.js-address-info-country';

        this.$map = this.$el.find('.js-address-info-google-map');
        this.$mapDisplay = this.$el.find('.js-address-info-google-map-display');
        this.$updateMap = this.$el.find('.js-address-info-update-google-map');
        this.$latInput = this.$el.find('.js-address-info-lat');
        this.$lngInput = this.$el.find('.js-address-info-lng');
        this.$addressInput = this.$el.find('.js-address-info-address');
        this.$streetNumberInput = this.$el.find('.js-address-info-street-number');
        this.$postalCodeInput = this.$el.find('.js-address-info-postal-code');
        this.$countryInput = this.$el.find(this.classCountry);
        this.$stateInput = this.$el.find('.js-address-info-state');
        this.$cityInput = this.$el.find('.js-address-info-city');
        this.$neighborhoodInput = this.$el.find('.js-address-info-neighborhood');
        this.$complementInput = this.$el.find('.js-address-info-complement');
        this.$postalCodeButton = this.$el.find('.js-btn-address-info-postal-code');
        this.$formattedAddressInput = this.$el.find('.js-address-info-formatted-address');
        this.$btnPostalCodeLoader = this.$el.find('.js-address-info__btn-postal-code-loader');
        this.$btnGoogleMapsLoader = this.$el.find('.js-address-info__btn-google-maps-loader');

        this.toast = web.getService('toast');
        this.translate = web.getService('translate');

        this.loadGoogleMap();
        this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
    bindEvents() {
        this.$updateMap.on('click', this.onUpdateGoogleMap.bind(this));
        this.$postalCodeButton.on('click', this.searchLocationFromPostalCode.bind(this));
        this.$postalCodeInput.on('change', this.searchLocationFromPostalCode.bind(this));
        this.$stateInput.on('change', this.onChangeStateInput.bind(this));
    }

    /**
     * Appends the google map (script tag) to the DOM.
     */
    loadGoogleMap() {
        const script = document.createElement('script');
        const key = this.options.apiKey;

        // Define publicly callable callback method.
        window.onMapLoaded = this.initGoogleMap.bind(this);

        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?language=' + this.options.locale + '&callback=onMapLoaded';

        // No key for local development, but if key is available (production) we need to define it.
        if (key) {
            script.src = script.src + '&key=' + key;
        }

        // Append script.
        this.$body.append(script);
    }

    /**
     * Initializes the google map.
     */
    initGoogleMap() {
        // Set basic config.
        this.map = new window.google.maps.Map(this.$mapDisplay.get(0), {
            streetViewControl: false,
            fullscreenControl: false,
            zoomControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_TOP,
            },
        });

        // If exist latitude and longitude on form, then will be displayed.
        const lat = this.$latInput.val();
        const lng = this.$lngInput.val();

        if (lat && lng) {
            this.setMarkerOnGoogleMaps(lat, lng);
        }
    }

    /**
     * Set marker on google map.
     *
     * @param {String} latitude
     * @param {String} longitude
     */
    setMarkerOnGoogleMaps(latitude, longitude) {
        if (!latitude || !longitude) {
            return;
        }

        this.$map.addClass(CLASSES.IS_LOADING);

        // Delete current marker on google maps if exist.
        if (this.marker) {
            this.marker.setMap(null);
        }

        this.bounds = new window.google.maps.LatLngBounds();

        const latlng = new window.google.maps.LatLng(latitude, longitude);

        this.marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            draggable: true,
        });

        this.marker.addListener('dragend', this.onDragendMarker.bind(this));

        this.bounds.extend(latlng);

        this.map.fitBounds(this.bounds);

        // Set a small delay to set correctly zoom on google map.
        setTimeout(() => {
            this.$map.removeClass(CLASSES.IS_LOADING);
            this.map.setZoom(16);
        }, 2000);
    }

    /**
     * Handle dragend of marker.
     */
    onDragendMarker(event) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        this.updateCoordinatesFields(lat, lng);
    }

    /**
     * Update coordinates on form.
     *
     * @param {String} latitude
     * @param {String} longitude
     */
    updateCoordinatesFields(latitude, longitude) {
        this.$latInput.val(latitude);
        this.$lngInput.val(longitude);
    }

    /**
     * Update marker on google maps.
     */
    onUpdateGoogleMap() {
        // Empty coordinates values and formatted address.
        this.$formattedAddressInput.val('');
        this.updateCoordinatesFields('','');
        this.showMessageLoadingGoogleMaps();
        this.$map.addClass(CLASSES.IS_LOADING);

        let param = {};
        let restrictions = {};
        let arrLocation = [];

        const countryAlpha2 = this.$countryInput.attr('data-auto-complete-alpha2');
        const state = this.$stateInput.val();
        const city = this.$cityInput.val();
        const neighborhood = this.$neighborhoodInput.val();
        const postalCode = this.$postalCodeInput.val();
        const address = this.$addressInput.val();
        const streetNumber = this.$streetNumberInput.val();
        const complement = this.$complementInput.val();

        if (postalCode) {
            restrictions.postalCode = postalCode;
        }

        if (countryAlpha2) {
            restrictions.country = countryAlpha2;
        }

        if (restrictions) {
            param.componentRestrictions = restrictions;
        }

        if (complement) {
            arrLocation.push(complement);
        }

        if (address) {
            let street = address;

            if (streetNumber) {
                street = street + ' ' + streetNumber;
            }

            arrLocation.push(street);
        }

        if (neighborhood) {
            arrLocation.push(neighborhood);
        }

        if (city) {
            arrLocation.push(city);
        }

        if (state) {
            arrLocation.push(state);
        }

        if (countryAlpha2) {
            arrLocation.push(countryAlpha2);
        }

        param.address = arrLocation.join(', ');

        /*
         * See documentation:
         * - https://developers.google.com/maps/documentation/javascript/geocoding
         */
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode(param, (results, status) => {
            if ('OK' === status) {
                const formattedAddress = results[0].formatted_address;
                const lat = results[0].geometry.location.lat();
                const lng = results[0].geometry.location.lng();

                this.$formattedAddressInput.val(formattedAddress);
                this.updateCoordinatesFields(lat, lng);
                this.setMarkerOnGoogleMaps(lat, lng);
                this.messageLocationLoadedGoogleMaps();
            } else {
                console.error('Geocode was not successful for the following reason: ' + status);
                this.$map.removeClass(CLASSES.IS_LOADING);
                this.messageNotFoundLocationGoogleMaps();
            }
        });
    }

    /**
     * Find location (state, city and neighborhood) through postal code with Google Service.
     */
    searchLocationFromPostalCode() {
        this.showMessageLoadingLocationByPostalCode();

        let address = [];
        let restrictions = {};

        const postalCode = this.$postalCodeInput.val();
        const countryAlpha2 = this.$countryInput.attr('data-auto-complete-alpha2');
        const countryId = this.$countryInput.attr('data-auto-complete-value');

        if (!postalCode) {
            alert('Postal code should be inform.');
            return;
        }

        if (!countryAlpha2) {
            alert('Country should be inform.');
            return;
        }

        this.emptySubFields();

        if (postalCode) {
            restrictions.postalCode = postalCode;
            address.push(postalCode);
        }

        if (countryAlpha2) {
            restrictions.country = countryAlpha2;
            address.push(countryAlpha2);
        }

        const param = {address: address.join(', '), componentRestrictions: restrictions};

        /*
         * See documentation:
         * - https://developers.google.com/maps/documentation/javascript/geocoding
         */
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode(param, (results, status) => {
            if ('OK' === status) {
                this.loadLocationDropdowns(results[0], countryId);
            } else {
                this.messageNotFoundLocationByPostalCode();
                console.error('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    /**
     * Update dropdown fields with the results of Google Service.
     *
     * @param {Object} results
     * @param {Object} countryId
     */
    loadLocationDropdowns(results, countryId) {
        if(undefined === results.address_components) {
            this.messageNotFoundLocationByPostalCode();
            return;
        }

        // Reset results from google.
        this.googleResults = {};

        /*
         * Documentation where explain all fields of Google Maps:
         * - https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
         */
        $.map( results.address_components, ( address ) => {
            // Get neighborhood.
            if ($.inArray('sublocality', address.types) !== -1){
                this.googleResults.neighborhood = address.long_name;
            }

            // Get city.
            if ($.inArray('administrative_area_level_2', address.types) !== -1){
                this.googleResults.city = address.long_name;
            }

            // Get state.
            if ($.inArray('administrative_area_level_1', address.types) !== -1){
                this.googleResults.state = address.long_name;
            }
        });

        // If need to debug information from google.
        // console.log(this.googleResults);

        this.updateDropdownStates();
    }

    /**
     * Updated dropdown of states and seleted correctly option.
     */
    updateDropdownStates() {
        const countryId = this.$el.find(this.classCountry + '[type="hidden"]').val();

        this.emptyDropdown(this.$stateInput);

        $.ajax({
            url: '/' + this.options.locale + ROUTES.LOCATION_STATES,
            data: {
                countryId: countryId,
                token: this.options.apiToken
            },
            type: 'GET',
            error: (response) => {
                // eslint-disable
                this.messageNotFoundLocationByPostalCode();
                console.error(response);
                // eslint-enable
            },
            success: (response) => {
                const states = response.data;

                if (false === response.success || 0 === states.length) {
                    // eslint-disable
                    this.messageNotFoundLocationByPostalCode();
                    console.error(response.message);
                    // eslint-enable
                    return;
                }

                // Display new states on dropdown.
                $.map( states, ( state ) => {
                    this.$stateInput.append($('<option>', {
                        value: state.id,
                        text: state.name
                    }));

                    if (this.googleResults.state === state.name) {
                        this.$stateInput.val(state.id);
                    }
                });

                this.updateDropdownCities();
            },
        });
    }

    /**
     * Updated dropdown of cities and selected correctly option.
     */
    updateDropdownCities() {
        const stateId = this.$stateInput.val();

        this.emptyDropdown(this.$cityInput);

        $.ajax({
            url: '/' + this.options.locale + ROUTES.LOCATION_CITIES,
            data: {
                stateId: stateId,
                token: this.options.apiToken
            },
            type: 'GET',
            error: (response) => {
                // eslint-disable
                this.messageNotFoundLocationByPostalCode();
                console.error(response);
                // eslint-enable
            },
            success: (response) => {
                const cities = response.data;

                if (false === response.success || 0 === cities.length) {
                    // eslint-disable
                    this.messageNotFoundLocationByPostalCode();
                    console.error(response.message);
                    // eslint-enable
                    return;
                }

                // Display new cities on dropdown.
                $.map( cities, ( city ) => {
                    this.$cityInput.append($('<option>', {
                        value: city.id,
                        text: city.name
                    }));

                    if (this.googleResults.city === city.name) {
                        this.$cityInput.val(city.id);
                    }
                });

                this.$neighborhoodInput.val(this.googleResults.neighborhood);

                this.messageLocationLoadedByPostalCode();
            },
        });
    }

    /**
     * Handle change state, will be list correct cities of selected state and reset neighborhood field.
     *
     * @param {Object} event
     */
    onChangeStateInput(event) {
        const stateId = $(event.currentTarget).val();

        if (!stateId) {
            return;
        }

        this.emptyDropdown(this.$cityInput);

        $.ajax({
            url: '/' + this.options.locale + ROUTES.LOCATION_CITIES,
            data: {
                stateId: stateId,
                token: this.options.apiToken
            },
            type: 'GET',
            error: (response) => {
                // eslint-disable
                console.error(response);
                // eslint-enable
            },
            success: (response) => {
                const cities = response.data;

                if (false === response.success || 0 === cities.length) {
                    // eslint-disable
                    console.error(response.message);
                    // eslint-enable
                    return;
                }

                // Display new cities on dropdown.
                $.map( cities, ( city ) => {
                    this.$cityInput.append($('<option>', {
                        value: city.id,
                        text: city.name
                    }));
                });

                this.$neighborhoodInput.val('');
            },
        });
    }

    /**
     * Empty dropdown field <select>.
     *
     * @param {Object} $select
     */
    emptyDropdown($select) {
        let $options = $select.find('option');

        $.map( $options, ( option ) => {
            const $option = $(option);

            if ('' !== $option.attr('value')) {
                $option.remove();
            }
        });
    }

    /**
     * Empty all sub-fields (state, city, neighborhood, address, street number, complement, latitude and longitude).
     */
    emptySubFields() {
        this.emptyDropdown(this.$stateInput);
        this.emptyDropdown(this.$cityInput);
        this.$neighborhoodInput.val('');
        this.$addressInput.val('');
        this.$streetNumberInput.val('');
        this.$complementInput.val('');
        this.$latInput.val('');
        this.$lngInput.val('');
        this.$formattedAddressInput.val('');
    }

    showMessageLoadingLocationByPostalCode() {
        this.$btnPostalCodeLoader.addClass(CLASSES.IS_VISIBLE);
        this.currentToast = this.toast.show(
            `<i class="fas fa-hourglass-half mr-1"></i> ${this.translate.text('loading')}${HTML.THREE_DOTS_ANIM}`,
            this.translate.text('searchLocationByPostalCode'),
            'bottom-right',
            'black'
        );
    }

    showMessageLoadingGoogleMaps() {
        this.$btnGoogleMapsLoader.addClass(CLASSES.IS_VISIBLE);
        this.currentToast = this.toast.show(
            `<i class="fas fa-hourglass-half mr-1"></i> ${this.translate.text('loading')}${HTML.THREE_DOTS_ANIM}`,
            this.translate.text('searchLocationOnGoogleMaps'),
            'bottom-right',
            'black'
        );
    }

    messageLocationLoadedByPostalCode() {
        this.$postalCodeButton.tooltip('hide');
        this.$btnPostalCodeLoader.removeClass(CLASSES.IS_VISIBLE);
        this.currentToast.find('.js-toast-title').html(`<i class="fas fa-check-circle mr-1"></i> ${this.translate.text('done')}`);
        this.currentToast.find('.js-toast-body').html(this.translate.text('locationFoundSuccessfully'));

        setTimeout(() => {
            this.currentToast.toast('hide');
        }, 3000);
    }

    messageLocationLoadedGoogleMaps() {
        this.$btnGoogleMapsLoader.removeClass(CLASSES.IS_VISIBLE);
        this.currentToast.find('.js-toast-title').html(`<i class="fas fa-check-circle mr-1"></i> ${this.translate.text('done')}`);
        this.currentToast.find('.js-toast-body').html(this.translate.text('locationGoogleMapsFoundSuccessfully'));

        setTimeout(() => {
            this.currentToast.toast('hide');
        }, 3000);
    }

    messageNotFoundLocationByPostalCode() {
        this.$btnPostalCodeLoader.removeClass(CLASSES.IS_VISIBLE);
        this.currentToast.find('.js-toast-title').html(`<i class="fas fa-times mr-1"></i> ${this.translate.text('notFound')}`);
        this.currentToast.find('.js-toast-body').html(this.translate.text('notFoundLocationByPostalCode'));

        setTimeout(() => {
            this.currentToast.toast('hide');
        }, 5000);
    }

    messageNotFoundLocationGoogleMaps() {
        this.$btnGoogleMapsLoader.removeClass(CLASSES.IS_VISIBLE);
        this.currentToast.find('.js-toast-title').html(`<i class="fas fa-times mr-1"></i> ${this.translate.text('notFound')}`);
        this.currentToast.find('.js-toast-body').html(this.translate.text('notFoundLocationOnGoogleMaps'));

        setTimeout(() => {
            this.currentToast.toast('hide');
        }, 5000);
    }
}

web.registerComponent('address-information', AddressInformation);
