"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./assets/js/components/address-information.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/address-information.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @sulu/web */ "./node_modules/@sulu/web/packages/core/core.js");
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_sulu_web__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _constants_classes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constants/classes */ "./assets/js/constants/classes.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constants/routes */ "./assets/js/constants/routes.js");
/* harmony import */ var _constants_html__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constants/html */ "./assets/js/constants/html.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Address information component is a feature where have all script for address information in a form.
 */
var AddressInformation = /*#__PURE__*/function () {
  function AddressInformation() {
    _classCallCheck(this, AddressInformation);
  }
  _createClass(AddressInformation, [{
    key: "initialize",
    value:
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {String} options.locale
     * @param {String} options.apiToken
     * @param {String} options.apiKey
     */
    function initialize($el, options) {
      this.$el = jquery__WEBPACK_IMPORTED_MODULE_22___default()($el);
      this.$body = jquery__WEBPACK_IMPORTED_MODULE_22___default()('body');
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
      this.toast = _sulu_web__WEBPACK_IMPORTED_MODULE_21___default().getService('toast');
      this.translate = _sulu_web__WEBPACK_IMPORTED_MODULE_21___default().getService('translate');
      this.loadGoogleMap();
      this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$updateMap.on('click', this.onUpdateGoogleMap.bind(this));
      this.$postalCodeButton.on('click', this.searchLocationFromPostalCode.bind(this));
      this.$postalCodeInput.on('change', this.searchLocationFromPostalCode.bind(this));
      this.$stateInput.on('change', this.onChangeStateInput.bind(this));
    }

    /**
     * Appends the google map (script tag) to the DOM.
     */
  }, {
    key: "loadGoogleMap",
    value: function loadGoogleMap() {
      var script = document.createElement('script');
      var key = this.options.apiKey;

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
  }, {
    key: "initGoogleMap",
    value: function initGoogleMap() {
      // Set basic config.
      this.map = new window.google.maps.Map(this.$mapDisplay.get(0), {
        streetViewControl: false,
        fullscreenControl: false,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP
        }
      });

      // If exist latitude and longitude on form, then will be displayed.
      var lat = this.$latInput.val();
      var lng = this.$lngInput.val();
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
  }, {
    key: "setMarkerOnGoogleMaps",
    value: function setMarkerOnGoogleMaps(latitude, longitude) {
      var _this = this;
      if (!latitude || !longitude) {
        return;
      }
      this.$map.addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_LOADING);

      // Delete current marker on google maps if exist.
      if (this.marker) {
        this.marker.setMap(null);
      }
      this.bounds = new window.google.maps.LatLngBounds();
      var latlng = new window.google.maps.LatLng(latitude, longitude);
      this.marker = new google.maps.Marker({
        position: latlng,
        map: this.map,
        draggable: true
      });
      this.marker.addListener('dragend', this.onDragendMarker.bind(this));
      this.bounds.extend(latlng);
      this.map.fitBounds(this.bounds);

      // Set a small delay to set correctly zoom on google map.
      setTimeout(function () {
        _this.$map.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_LOADING);
        _this.map.setZoom(16);
      }, 2000);
    }

    /**
     * Handle dragend of marker.
     */
  }, {
    key: "onDragendMarker",
    value: function onDragendMarker(event) {
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      this.updateCoordinatesFields(lat, lng);
    }

    /**
     * Update coordinates on form.
     *
     * @param {String} latitude
     * @param {String} longitude
     */
  }, {
    key: "updateCoordinatesFields",
    value: function updateCoordinatesFields(latitude, longitude) {
      this.$latInput.val(latitude);
      this.$lngInput.val(longitude);
    }

    /**
     * Update marker on google maps.
     */
  }, {
    key: "onUpdateGoogleMap",
    value: function onUpdateGoogleMap() {
      var _this2 = this;
      // Empty coordinates values and formatted address.
      this.$formattedAddressInput.val('');
      this.updateCoordinatesFields('', '');
      this.showMessageLoadingGoogleMaps();
      this.$map.addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_LOADING);
      var param = {};
      var restrictions = {};
      var arrLocation = [];
      var countryAlpha2 = this.$countryInput.attr('data-auto-complete-alpha2');
      var state = this.$stateInput.val();
      var city = this.$cityInput.val();
      var neighborhood = this.$neighborhoodInput.val();
      var postalCode = this.$postalCodeInput.val();
      var address = this.$addressInput.val();
      var streetNumber = this.$streetNumberInput.val();
      var complement = this.$complementInput.val();
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
        var street = address;
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
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(param, function (results, status) {
        if ('OK' === status) {
          var formattedAddress = results[0].formatted_address;
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          _this2.$formattedAddressInput.val(formattedAddress);
          _this2.updateCoordinatesFields(lat, lng);
          _this2.setMarkerOnGoogleMaps(lat, lng);
          _this2.messageLocationLoadedGoogleMaps();
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
          _this2.$map.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_LOADING);
          _this2.messageNotFoundLocationGoogleMaps();
        }
      });
    }

    /**
     * Find location (state, city and neighborhood) through postal code with Google Service.
     */
  }, {
    key: "searchLocationFromPostalCode",
    value: function searchLocationFromPostalCode() {
      var _this3 = this;
      this.showMessageLoadingLocationByPostalCode();
      var address = [];
      var restrictions = {};
      var postalCode = this.$postalCodeInput.val();
      var countryAlpha2 = this.$countryInput.attr('data-auto-complete-alpha2');
      var countryId = this.$countryInput.attr('data-auto-complete-value');
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
      var param = {
        address: address.join(', '),
        componentRestrictions: restrictions
      };

      /*
       * See documentation:
       * - https://developers.google.com/maps/documentation/javascript/geocoding
       */
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(param, function (results, status) {
        if ('OK' === status) {
          _this3.loadLocationDropdowns(results[0], countryId);
        } else {
          _this3.messageNotFoundLocationByPostalCode();
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
  }, {
    key: "loadLocationDropdowns",
    value: function loadLocationDropdowns(results, countryId) {
      var _this4 = this;
      if (undefined === results.address_components) {
        this.messageNotFoundLocationByPostalCode();
        return;
      }

      // Reset results from google.
      this.googleResults = {};

      /*
       * Documentation where explain all fields of Google Maps:
       * - https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
       */
      jquery__WEBPACK_IMPORTED_MODULE_22___default().map(results.address_components, function (address) {
        // Get neighborhood.
        if (jquery__WEBPACK_IMPORTED_MODULE_22___default().inArray('sublocality', address.types) !== -1) {
          _this4.googleResults.neighborhood = address.long_name;
        }

        // Get city.
        if (jquery__WEBPACK_IMPORTED_MODULE_22___default().inArray('administrative_area_level_2', address.types) !== -1) {
          _this4.googleResults.city = address.long_name;
        }

        // Get state.
        if (jquery__WEBPACK_IMPORTED_MODULE_22___default().inArray('administrative_area_level_1', address.types) !== -1) {
          _this4.googleResults.state = address.long_name;
        }
      });

      // If need to debug information from google.
      // console.log(this.googleResults);

      this.updateDropdownStates();
    }

    /**
     * Updated dropdown of states and seleted correctly option.
     */
  }, {
    key: "updateDropdownStates",
    value: function updateDropdownStates() {
      var _this5 = this;
      var countryId = this.$el.find(this.classCountry + '[type="hidden"]').val();
      this.emptyDropdown(this.$stateInput);
      jquery__WEBPACK_IMPORTED_MODULE_22___default().ajax({
        url: '/' + this.options.locale + _constants_routes__WEBPACK_IMPORTED_MODULE_24__["default"].LOCATION_STATES,
        data: {
          countryId: countryId,
          token: this.options.apiToken
        },
        type: 'GET',
        error: function error(response) {
          // eslint-disable
          _this5.messageNotFoundLocationByPostalCode();
          console.error(response);
          // eslint-enable
        },

        success: function success(response) {
          var states = response.data;
          if (false === response.success || 0 === states.length) {
            // eslint-disable
            _this5.messageNotFoundLocationByPostalCode();
            console.error(response.message);
            // eslint-enable
            return;
          }

          // Display new states on dropdown.
          jquery__WEBPACK_IMPORTED_MODULE_22___default().map(states, function (state) {
            _this5.$stateInput.append(jquery__WEBPACK_IMPORTED_MODULE_22___default()('<option>', {
              value: state.id,
              text: state.name
            }));
            if (_this5.googleResults.state === state.name) {
              _this5.$stateInput.val(state.id);
            }
          });
          _this5.updateDropdownCities();
        }
      });
    }

    /**
     * Updated dropdown of cities and selected correctly option.
     */
  }, {
    key: "updateDropdownCities",
    value: function updateDropdownCities() {
      var _this6 = this;
      var stateId = this.$stateInput.val();
      this.emptyDropdown(this.$cityInput);
      jquery__WEBPACK_IMPORTED_MODULE_22___default().ajax({
        url: '/' + this.options.locale + _constants_routes__WEBPACK_IMPORTED_MODULE_24__["default"].LOCATION_CITIES,
        data: {
          stateId: stateId,
          token: this.options.apiToken
        },
        type: 'GET',
        error: function error(response) {
          // eslint-disable
          _this6.messageNotFoundLocationByPostalCode();
          console.error(response);
          // eslint-enable
        },

        success: function success(response) {
          var cities = response.data;
          if (false === response.success || 0 === cities.length) {
            // eslint-disable
            _this6.messageNotFoundLocationByPostalCode();
            console.error(response.message);
            // eslint-enable
            return;
          }

          // Display new cities on dropdown.
          jquery__WEBPACK_IMPORTED_MODULE_22___default().map(cities, function (city) {
            _this6.$cityInput.append(jquery__WEBPACK_IMPORTED_MODULE_22___default()('<option>', {
              value: city.id,
              text: city.name
            }));
            if (_this6.googleResults.city === city.name) {
              _this6.$cityInput.val(city.id);
            }
          });
          _this6.$neighborhoodInput.val(_this6.googleResults.neighborhood);
          _this6.messageLocationLoadedByPostalCode();
        }
      });
    }

    /**
     * Handle change state, will be list correct cities of selected state and reset neighborhood field.
     *
     * @param {Object} event
     */
  }, {
    key: "onChangeStateInput",
    value: function onChangeStateInput(event) {
      var _this7 = this;
      var stateId = jquery__WEBPACK_IMPORTED_MODULE_22___default()(event.currentTarget).val();
      if (!stateId) {
        return;
      }
      this.emptyDropdown(this.$cityInput);
      jquery__WEBPACK_IMPORTED_MODULE_22___default().ajax({
        url: '/' + this.options.locale + _constants_routes__WEBPACK_IMPORTED_MODULE_24__["default"].LOCATION_CITIES,
        data: {
          stateId: stateId,
          token: this.options.apiToken
        },
        type: 'GET',
        error: function error(response) {
          // eslint-disable
          console.error(response);
          // eslint-enable
        },

        success: function success(response) {
          var cities = response.data;
          if (false === response.success || 0 === cities.length) {
            // eslint-disable
            console.error(response.message);
            // eslint-enable
            return;
          }

          // Display new cities on dropdown.
          jquery__WEBPACK_IMPORTED_MODULE_22___default().map(cities, function (city) {
            _this7.$cityInput.append(jquery__WEBPACK_IMPORTED_MODULE_22___default()('<option>', {
              value: city.id,
              text: city.name
            }));
          });
          _this7.$neighborhoodInput.val('');
        }
      });
    }

    /**
     * Empty dropdown field <select>.
     *
     * @param {Object} $select
     */
  }, {
    key: "emptyDropdown",
    value: function emptyDropdown($select) {
      var $options = $select.find('option');
      jquery__WEBPACK_IMPORTED_MODULE_22___default().map($options, function (option) {
        var $option = jquery__WEBPACK_IMPORTED_MODULE_22___default()(option);
        if ('' !== $option.attr('value')) {
          $option.remove();
        }
      });
    }

    /**
     * Empty all sub-fields (state, city, neighborhood, address, street number, complement, latitude and longitude).
     */
  }, {
    key: "emptySubFields",
    value: function emptySubFields() {
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
  }, {
    key: "showMessageLoadingLocationByPostalCode",
    value: function showMessageLoadingLocationByPostalCode() {
      this.$btnPostalCodeLoader.addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_VISIBLE);
      this.currentToast = this.toast.show("<i class=\"fas fa-hourglass-half mr-1\"></i> ".concat(this.translate.text('loading')).concat(_constants_html__WEBPACK_IMPORTED_MODULE_25__["default"].THREE_DOTS_ANIM), this.translate.text('searchLocationByPostalCode'), 'bottom-right', 'black');
    }
  }, {
    key: "showMessageLoadingGoogleMaps",
    value: function showMessageLoadingGoogleMaps() {
      this.$btnGoogleMapsLoader.addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_VISIBLE);
      this.currentToast = this.toast.show("<i class=\"fas fa-hourglass-half mr-1\"></i> ".concat(this.translate.text('loading')).concat(_constants_html__WEBPACK_IMPORTED_MODULE_25__["default"].THREE_DOTS_ANIM), this.translate.text('searchLocationOnGoogleMaps'), 'bottom-right', 'black');
    }
  }, {
    key: "messageLocationLoadedByPostalCode",
    value: function messageLocationLoadedByPostalCode() {
      var _this8 = this;
      this.$postalCodeButton.tooltip('hide');
      this.$btnPostalCodeLoader.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_VISIBLE);
      this.currentToast.find('.js-toast-title').html("<i class=\"fas fa-check-circle mr-1\"></i> ".concat(this.translate.text('done')));
      this.currentToast.find('.js-toast-body').html(this.translate.text('locationFoundSuccessfully'));
      setTimeout(function () {
        _this8.currentToast.toast('hide');
      }, 3000);
    }
  }, {
    key: "messageLocationLoadedGoogleMaps",
    value: function messageLocationLoadedGoogleMaps() {
      var _this9 = this;
      this.$btnGoogleMapsLoader.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_VISIBLE);
      this.currentToast.find('.js-toast-title').html("<i class=\"fas fa-check-circle mr-1\"></i> ".concat(this.translate.text('done')));
      this.currentToast.find('.js-toast-body').html(this.translate.text('locationGoogleMapsFoundSuccessfully'));
      setTimeout(function () {
        _this9.currentToast.toast('hide');
      }, 3000);
    }
  }, {
    key: "messageNotFoundLocationByPostalCode",
    value: function messageNotFoundLocationByPostalCode() {
      var _this10 = this;
      this.$btnPostalCodeLoader.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_VISIBLE);
      this.currentToast.find('.js-toast-title').html("<i class=\"fas fa-times mr-1\"></i> ".concat(this.translate.text('notFound')));
      this.currentToast.find('.js-toast-body').html(this.translate.text('notFoundLocationByPostalCode'));
      setTimeout(function () {
        _this10.currentToast.toast('hide');
      }, 5000);
    }
  }, {
    key: "messageNotFoundLocationGoogleMaps",
    value: function messageNotFoundLocationGoogleMaps() {
      var _this11 = this;
      this.$btnGoogleMapsLoader.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_23__["default"].IS_VISIBLE);
      this.currentToast.find('.js-toast-title').html("<i class=\"fas fa-times mr-1\"></i> ".concat(this.translate.text('notFound')));
      this.currentToast.find('.js-toast-body').html(this.translate.text('notFoundLocationOnGoogleMaps'));
      setTimeout(function () {
        _this11.currentToast.toast('hide');
      }, 5000);
    }
  }]);
  return AddressInformation;
}();
_sulu_web__WEBPACK_IMPORTED_MODULE_21___default().registerComponent('address-information', AddressInformation);

/***/ }),

/***/ "./assets/js/components/auto-complete.js":
/*!***********************************************!*\
  !*** ./assets/js/components/auto-complete.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @sulu/web */ "./node_modules/@sulu/web/packages/core/core.js");
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_sulu_web__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _constants_classes__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constants/classes */ "./assets/js/constants/classes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/**
 * AutoComplete component.
 */
var AutoComplete = /*#__PURE__*/function () {
  function AutoComplete() {
    _classCallCheck(this, AutoComplete);
  }
  _createClass(AutoComplete, [{
    key: "initialize",
    value:
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {String} options.url
     * @param {String} options.data
     * @param {String} options.method
     * @param {Array} options.attr
     * @param {String} options.dataNode
     * @param {Array} options.dataText
     * @param {String} options.dataValue
     * @param {String} options.classDivResults
     */
    function initialize($el, options) {
      this.$el = jquery__WEBPACK_IMPORTED_MODULE_28___default()($el);
      this.$document = jquery__WEBPACK_IMPORTED_MODULE_28___default()(document);
      this.window = jquery__WEBPACK_IMPORTED_MODULE_28___default()(window);
      this.options = options;
      this.options.dataNode = undefined === this.options.dataNode ? 'data' : this.options.dataNode;
      this.options.dataText = undefined === this.options.dataText ? ['name'] : this.options.dataText;
      this.options.dataValue = undefined === this.options.dataValue ? 'id' : this.options.dataValue;
      this.$input = this.$el.find('input');
      this.$inputText = this.$input;
      this.tmpInputVal = '';
      this.prepareInput();
      this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$inputText.on('keyup', this.onChangeInput.bind(this));
      this.$inputText.on('keyup', this.onChangeInput.bind(this));
      this.window.on('resize', this.onResize.bind(this));
      this.$document.on('keydown', this.onKeydown.bind(this));
    }
  }, {
    key: "prepareInput",
    value: function prepareInput() {
      // Make clone and create input of hidden type.
      this.$inputHidden = this.$input.clone();
      this.$inputHidden.attr('type', 'hidden');
      this.$inputHidden.insertAfter(this.$inputText);

      // Default values. Usually by edit form when if necessary to load data and need to displayed in input.
      this.$inputText.val(this.$input.data('auto-complete-text'));
      this.$inputHidden.val(this.$input.data('auto-complete-value'));
      var nameInputText = this.$inputText.attr('name');
      this.$inputText.attr('name', "".concat(nameInputText, "_auto_complete_text"));
      this.$inputText.attr('autocomplete', 'none');
      this.classResults = 'js-auto-complete-results';
      this.classResultsItem = 'js-auto-complete-results-item';
    }

    /**
     * Load data via API url after changed input.
     *
     * {Object} event
     */
  }, {
    key: "onChangeInput",
    value: function onChangeInput(event) {
      var _this = this;
      var $input = jquery__WEBPACK_IMPORTED_MODULE_28___default()(event.currentTarget);

      // Detect if value changed, then nothing happen.
      if (this.tmpInputVal === $input.val()) {
        return;
      }
      var text = $input.val();
      this.tmpInputVal = text;
      var $results = jquery__WEBPACK_IMPORTED_MODULE_28___default()(".".concat(this.classResults));
      if ($results.length) {
        $results.remove();
      }
      if (1 >= text.length) {
        return;
      }
      var dataToSend = {
        text: text
      };
      if (0 < Object.keys(this.options.data).length) {
        // ES6 with spread operator.
        dataToSend = _objectSpread(_objectSpread({}, this.options.data), {
          text: text
        });
      }
      jquery__WEBPACK_IMPORTED_MODULE_28___default().ajax({
        url: this.options.url,
        data: dataToSend,
        type: this.options.method,
        error: function error(data) {
          // eslint-disable
          console.error(data);
          // eslint-enable
        },

        success: function success(data) {
          var obj = data[_this.options.dataNode];
          if (false === data.success || 0 === obj.length) {
            // eslint-disable
            console.error(data.message);
            // eslint-enable
            return;
          }

          // Avoid duplicate results list.
          jquery__WEBPACK_IMPORTED_MODULE_28___default()(".".concat(_this.classResults)).remove();
          var html = "<ul class=\"auto-complete-input-results ".concat(_this.classResults, " ").concat(_this.options.classDivResults, "\">");
          jquery__WEBPACK_IMPORTED_MODULE_28___default().map(obj, function (val, index) {
            var arrText = [];
            jquery__WEBPACK_IMPORTED_MODULE_28___default().map(_this.options.dataText, function (dataText, index) {
              arrText[index] = val[dataText];
            });
            html += "<li class=\"".concat(_this.classResultsItem, "\" data-json='").concat(JSON.stringify(val), "' data-item-index='").concat(index, "'>").concat(arrText.join(' '), "</li>");
          });
          html += '</ul>';
          $results = jquery__WEBPACK_IMPORTED_MODULE_28___default()(html);
          $results.css('width', "".concat($input.outerWidth(), "px"));
          $results.insertAfter($input);
          $results.find(".".concat(_this.classResultsItem)).on('click', _this.onClickItemFromResults.bind(_this));
        }
      });
    }
  }, {
    key: "onResize",
    value: function onResize() {
      // Resize auto-complete results.
      var $propertyCountryResults = jquery__WEBPACK_IMPORTED_MODULE_28___default()(".".concat(this.classResults));
      if ($propertyCountryResults.length) {
        $propertyCountryResults.css('width', "".concat(this.$inputText.outerWidth(), "px"));
      }
    }

    /**
     * Handle by click on result list.
     *
     * {Object} event
     */
  }, {
    key: "onClickItemFromResults",
    value: function onClickItemFromResults(event) {
      var $item = jquery__WEBPACK_IMPORTED_MODULE_28___default()(event.currentTarget);
      this.getValueToInput($item);
    }

    /**
     * Get value from results list and put on input field.
     *
     * {Object} $item
     */
  }, {
    key: "getValueToInput",
    value: function getValueToInput($item) {
      var _this2 = this;
      var text = $item.text();
      var objData = $item.data('json');
      var value = objData[this.options.dataValue];

      // Remove results.
      jquery__WEBPACK_IMPORTED_MODULE_28___default()(".".concat(this.classResults)).remove();

      // Set values.
      this.tmpInputVal = text;
      this.$inputText.val(text);
      this.$inputHidden.val(objData[this.options.dataValue]);

      // Set values to attributes.
      this.$inputText.attr('data-auto-complete-text', text);
      this.$inputText.attr('data-auto-complete-value', value);
      this.$inputHidden.attr('data-auto-complete-text', text);
      this.$inputHidden.attr('data-auto-complete-value', value);
      this.$inputHidden.trigger('change');
      if ('undefined' !== this.options.attr) {
        jquery__WEBPACK_IMPORTED_MODULE_28___default().map(this.options.attr, function (attrName) {
          var attrValue = objData[attrName];
          _this2.$inputText.attr("data-auto-complete-".concat(attrName), attrValue);
          _this2.$inputHidden.attr("data-auto-complete-".concat(attrName), attrValue);
        });
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var $results = this.$el.find(".".concat(this.classResults));
      var $items = $results.find('li');
      var $itemActive = $items.filter(".".concat(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE));

      // If not are showing results, then nothing will happen.
      if (0 === $results.length) {
        return;
      }

      // Did typ on arrow up.
      if (event.keyCode === 38) {
        if (0 === $itemActive.length) {
          $items.eq($items.length - 1).addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE);
          return;
        }
        $itemActive.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE);
        var $prevItem = $items.eq($itemActive.data('item-index') - 1);
        if (0 < $prevItem.length) {
          $prevItem.addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE);
        }

        // Did typ on arrow down.
      } else if (event.keyCode === 40) {
        if (0 === $itemActive.length) {
          $items.eq(0).addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE);
          return;
        }
        $itemActive.removeClass(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE);
        var $nextItem = $items.eq($itemActive.data('item-index') + 1);
        if (0 < $nextItem.length) {
          $nextItem.addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE);
        } else {
          $items.eq(0).addClass(_constants_classes__WEBPACK_IMPORTED_MODULE_29__["default"].IS_ACTIVE);
        }

        // Did typ on ENTER and detect an active item from list.
      } else if (event.keyCode === 13 && 0 < $itemActive.length) {
        event.preventDefault();
        this.getValueToInput($itemActive);
      }
    }
  }]);
  return AutoComplete;
}();
_sulu_web__WEBPACK_IMPORTED_MODULE_27___default().registerComponent('auto-complete', AutoComplete);

/***/ }),

/***/ "./assets/js/components/button-loading.js":
/*!************************************************!*\
  !*** ./assets/js/components/button-loading.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sulu/web */ "./node_modules/@sulu/web/packages/core/core.js");
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sulu_web__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _constants_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constants/html */ "./assets/js/constants/html.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var HEIGHT_LOADING_ICON = '1.5rem';

/**
 * ButtonLoading component.
 */
var ButtonLoading = /*#__PURE__*/function () {
  function ButtonLoading() {
    _classCallCheck(this, ButtonLoading);
  }
  _createClass(ButtonLoading, [{
    key: "initialize",
    value:
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {String} options.heightLoadingIcon
     */
    function initialize($el, options) {
      this.$el = jquery__WEBPACK_IMPORTED_MODULE_16___default()($el);
      this.options = options;
      console.log('button-loading');
      this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$el.on('click', this.showLoading.bind(this));
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var _this$options$heightL;
      var heightLoadingIcon = (_this$options$heightL = this.options.heightLoadingIcon) !== null && _this$options$heightL !== void 0 ? _this$options$heightL : HEIGHT_LOADING_ICON;
      this.$el.find('.js-button-loading-icon').remove();
      this.$el.prepend(jquery__WEBPACK_IMPORTED_MODULE_16___default()(_constants_html__WEBPACK_IMPORTED_MODULE_17__["default"].LOADING_DUAL_RING_WHITE).addClass('js-button-loading-icon mr-2').attr({
        'style': "height:".concat(heightLoadingIcon, ";")
      }));
      this.$el.find('.js-button-loading--removing').hide();
    }
  }]);
  return ButtonLoading;
}();
_sulu_web__WEBPACK_IMPORTED_MODULE_15___default().registerComponent('button-loading', ButtonLoading);

/***/ }),

/***/ "./assets/js/components/datepicker.js":
/*!********************************************!*\
  !*** ./assets/js/components/datepicker.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sulu/web */ "./node_modules/@sulu/web/packages/core/core.js");
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sulu_web__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var jquery_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery-datepicker */ "./node_modules/jquery-datepicker/jquery-datepicker.js");
/* harmony import */ var jquery_datepicker__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery_datepicker__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _constants_locale_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constants/locale-datepicker */ "./assets/js/constants/locale-datepicker.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/**
 * Datepicker component.
 */
var Datepicker = /*#__PURE__*/function () {
  function Datepicker() {
    _classCallCheck(this, Datepicker);
  }
  _createClass(Datepicker, [{
    key: "initialize",
    value:
    /**
     * Initialize component.
     *
     * @param {Object} $el
     * @param {Object} options
     * @param {string} options.locale
     * @param {boolean} options.changeMonth
     * @param {boolean} options.changeYear
     */
    function initialize($el, options) {
      this.options = options;
      this.$el = jquery__WEBPACK_IMPORTED_MODULE_16___default()($el);
      this.$datepicker = this.$el.find('.js-datepicker');
      this.$uiDatepicker = jquery__WEBPACK_IMPORTED_MODULE_16___default()('div.ui-datepicker');
      this.initFormDatepicker();
      this.bindEvents();
    }

    /**
     * Binds event listeners.
     */
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$uiDatepicker.on('click', this.onClickDatepicker.bind(this));
    }

    /**
     * Initialize datepicker.
     */
  }, {
    key: "initFormDatepicker",
    value: function initFormDatepicker() {
      var _this$options$changeM, _this$options$changeY;
      jquery_datepicker__WEBPACK_IMPORTED_MODULE_17___default()((jquery__WEBPACK_IMPORTED_MODULE_16___default()));
      if (this.options.locale) {
        _constants_locale_datepicker__WEBPACK_IMPORTED_MODULE_18__["default"][this.options.locale].factory((jquery__WEBPACK_IMPORTED_MODULE_16___default()));
      }
      this.$datepicker.datepicker({
        changeMonth: (_this$options$changeM = this.options.changeMonth) !== null && _this$options$changeM !== void 0 ? _this$options$changeM : false,
        changeYear: (_this$options$changeY = this.options.changeYear) !== null && _this$options$changeY !== void 0 ? _this$options$changeY : false
      });
    }

    /**
     * Handle click on calendar will set same width from input.
     *
     * @param {Object} event
     */
  }, {
    key: "onClickDatepicker",
    value: function onClickDatepicker(event) {
      jquery__WEBPACK_IMPORTED_MODULE_16___default()(event.currentTarget).outerWidth(this.$datepicker.outerWidth());
    }
  }]);
  return Datepicker;
}();
_sulu_web__WEBPACK_IMPORTED_MODULE_15___default().registerComponent('datepicker', Datepicker);

/***/ }),

/***/ "./assets/js/components/phone-number.js":
/*!**********************************************!*\
  !*** ./assets/js/components/phone-number.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @sulu/web */ "./node_modules/@sulu/web/packages/core/core.js");
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_sulu_web__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_20__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * PhoneNumber component.
 */
var PhoneNumber = /*#__PURE__*/function () {
  function PhoneNumber() {
    _classCallCheck(this, PhoneNumber);
  }
  _createClass(PhoneNumber, [{
    key: "initialize",
    value:
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
    function initialize($el, options) {
      this.$el = jquery__WEBPACK_IMPORTED_MODULE_20___default()($el);
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
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.getDropdownCountryCallingCode().on('click', this.onUpdateCountryCallingCode.bind(this));
    }
  }, {
    key: "getDropdownCountryCallingCode",
    value: function getDropdownCountryCallingCode() {
      return this.$el.find(".".concat(this.classDropdownCountryCallingCode));
    }

    /**
     * @param {Object} event
     */
  }, {
    key: "onUpdateCountryCallingCode",
    value: function onUpdateCountryCallingCode(event) {
      event.preventDefault();
      var $country = jquery__WEBPACK_IMPORTED_MODULE_20___default()(event.currentTarget);
      this.$el.find('.js-phone-number-button-calling-code').filter("[data-index=\"".concat($country.data('index'), "\"]")).html(this.getHTMLCountryAndCallingCode($country.data('alpha2'), $country.data('calling-code'))).attr('title', $country.data('name'));
      this.$el.find('[name="' + this.options.prefixEntity + '[phone_number_country_id]"]').val($country.data('id'));
    }
  }, {
    key: "getHTMLCountryAndCallingCode",
    value: function getHTMLCountryAndCallingCode(alpha2, callingCode) {
      return "".concat(this.getHTMLCountryFlag(alpha2 !== null && alpha2 !== void 0 ? alpha2 : ''), " <span class=\"text-black-50\">").concat(callingCode !== null && callingCode !== void 0 ? callingCode : '', " </span>");
    }
  }, {
    key: "getHTMLCountryFlag",
    value: function getHTMLCountryFlag(alpha2) {
      return "<span class=\"fi fi-".concat(alpha2.toLowerCase(), "\"></span>");
    }
  }, {
    key: "displayPhoneNumberInput",
    value: function displayPhoneNumberInput() {
      var _this = this;
      var flags = {};
      var countryCallingCodes = this.countryCallingCodes.reduce(function (html, country) {
        var _country$callingCode;
        flags[country.id] = country.alpha2.toLowerCase();
        return html += "<a class=\"dropdown-item ".concat(_this.classDropdownCountryCallingCode, "\" href=\"#\" data-name=\"").concat(country.name, "\" data-calling-code=\"").concat(country.callingCode, "\" data-alpha2=\"").concat(country.alpha2.toLowerCase(), "\" data-id=\"").concat(country.id, "\" data-index=\"0\">").concat(_this.getHTMLCountryFlag(country.alpha2), " <span class=\"ml-1\">").concat(country.name, "</span> <span class=\"text-black-50\">").concat((_country$callingCode = country.callingCode) !== null && _country$callingCode !== void 0 ? _country$callingCode : '', "</span></a>");
      }, '');
      var input = '<div class="form-group">' + '<label for="phone_number" class="control-label required">' + this.options.translations.label + '</label> ' + '<div class="input-group">' + '<div class="input-group-prepend">' + '<button class="btn btn-light dropdown-toggle form__dropdown-toggle-country-codes js-phone-number-button-calling-code" type="button" data-toggle="dropdown"' + 'aria-haspopup="true" aria-expanded="false" data-index="0" title="' + this.options.translations.selectCountryCallingCode + '">' + '<i class="fas fa-globe text-black-50" aria-hidden="true"></i>' + '</button>' + '<div class="dropdown-menu form__dropdown-menu-country-codes">' + countryCallingCodes + '</div>' + '</div>' + '<input type="hidden" name="' + this.options.prefixEntity + '[phone_number_country_id]" value="' + this.options.locationCountryId + '">' + '<input type="text" id="phone_number" name="' + this.options.prefixEntity + '[phone_number]" class="form-control" value="' + this.options.value + '">' + '</div>' + '</div>';
      this.$el.html(input);
    }
  }, {
    key: "setCallingCodeOnDropdown",
    value: function setCallingCodeOnDropdown() {
      var _this2 = this;
      var country = this.countryCallingCodes.find(function (country) {
        return country.id === _this2.options.locationCountryId;
      });
      if (country) {
        this.$el.find('.js-phone-number-button-calling-code').html(this.getHTMLCountryAndCallingCode(country.alpha2, country.callingCode)).attr('title', country.name);
      }
    }
  }]);
  return PhoneNumber;
}();
_sulu_web__WEBPACK_IMPORTED_MODULE_19___default().registerComponent('phone-number', PhoneNumber);

/***/ }),

/***/ "./assets/js/constants/classes.js":
/*!****************************************!*\
  !*** ./assets/js/constants/classes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This constant file contains class names that are used across multiple components.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  IS_ACTIVE: 'is-active',
  IS_LOADING: 'is-loading',
  IS_VISIBLE: 'is-visible'
});

/***/ }),

/***/ "./assets/js/constants/html.js":
/*!*************************************!*\
  !*** ./assets/js/constants/html.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This constant file contains HTML strings that are used across multiple components.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  THREE_DOTS_ANIM: '<span class="three-dots__dot1">.</span><span class="three-dots__dot2">.</span><span class="three-dots__dot3">.</span>',
  LOADING_DUAL_RING_WHITE: '<img src="/img/loaders/dual-ring-white.svg" alt=""/>'
});

/***/ }),

/***/ "./assets/js/constants/locale-datepicker.js":
/*!**************************************************!*\
  !*** ./assets/js/constants/locale-datepicker.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-datepicker/i18n/jquery.ui.datepicker-de */ "./node_modules/jquery-datepicker/i18n/jquery.ui.datepicker-de.js");
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_de__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_datepicker_i18n_jquery_ui_datepicker_de__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_en_GB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-datepicker/i18n/jquery.ui.datepicker-en-GB */ "./node_modules/jquery-datepicker/i18n/jquery.ui.datepicker-en-GB.js");
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_en_GB__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_datepicker_i18n_jquery_ui_datepicker_en_GB__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-datepicker/i18n/jquery.ui.datepicker-pt-BR */ "./node_modules/jquery-datepicker/i18n/jquery.ui.datepicker-pt-BR.js");
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_pt_BR__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_datepicker_i18n_jquery_ui_datepicker_pt_BR__WEBPACK_IMPORTED_MODULE_2__);
// Load all necessary languages from datepicker library.



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'en': {
    factory: (jquery_datepicker_i18n_jquery_ui_datepicker_en_GB__WEBPACK_IMPORTED_MODULE_1___default())
  },
  'de': {
    factory: (jquery_datepicker_i18n_jquery_ui_datepicker_de__WEBPACK_IMPORTED_MODULE_0___default())
  },
  'pt': {
    factory: (jquery_datepicker_i18n_jquery_ui_datepicker_pt_BR__WEBPACK_IMPORTED_MODULE_2___default())
  }
});

/***/ }),

/***/ "./assets/js/constants/routes.js":
/*!***************************************!*\
  !*** ./assets/js/constants/routes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This constant file contains class names that are used across multiple components.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  LOCATION_STATES: '/api/location/states',
  LOCATION_CITIES: '/api/location/cities',
  LOCATION_NEIGHBORHOOD: '/api/location/neighborhoods',
  PROPERTY_PHOTO_UPLOAD: '/api/property-photo/upload',
  PROPERTY_PHOTO_DELETE: '/api/property-photo/delete',
  PROPERTY_PHOTO_SORT: '/api/property-photo/sort',
  CUSTOM_FIELDS: '/api/custom-fields'
});

/***/ }),

/***/ "./assets/js/constants/translations.js":
/*!*********************************************!*\
  !*** ./assets/js/constants/translations.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This constant file contains translations available for all JS scripts.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'en-US': {
    done: 'Done',
    notFound: 'Not Found',
    notFoundLocationByPostalCode: 'Unfortunately we can\'t find the location by zip code.',
    notFoundLocationOnGoogleMaps: 'Unfortunately we can\'t find the location on google maps.',
    loading: 'Loading',
    locationGoogleMapsFoundSuccessfully: 'Yeaah!!! The location on google maps was found successfully!',
    locationFoundSuccessfully: 'Yeaah!!! The location was found successfully!',
    searchLocationByPostalCode: 'Search the location by postal code.',
    searchLocationOnGoogleMaps: 'Search the location on google maps.',
    selectPhotos: 'Select photos'
  },
  'de-DE': {
    done: 'Fertig',
    notFound: 'Nicht Gefunden',
    notFoundLocationByPostalCode: 'Leider können wir den Ort nicht über die Postleitzahl finden.',
    notFoundLocationOnGoogleMaps: 'Leider können wir den Ort nicht über im Google Maps finden.',
    loading: 'Laden',
    locationGoogleMapsFoundSuccessfully: 'Uhuuu!!! Der Standort im Google Maps wurde erfolgreich gefunden!',
    locationFoundSuccessfully: 'Uhuuu!!! Der Standort wurde erfolgreich gefunden!',
    searchLocationByPostalCode: 'Den Ort wird durch den Postleitzahl gesucht.',
    searchLocationOnGoogleMaps: 'Den Ort wird im Google Maps gesucht.',
    selectPhotos: 'Fotos auswählen'
  },
  'pt-BR': {
    done: 'Feito',
    notFound: 'Não encontramos',
    notFoundLocationByPostalCode: 'Infelizmente não achamos a localização pelo CEP.',
    notFoundLocationOnGoogleMaps: 'Infelizmente não achamos a localização no google maps.',
    loading: 'Carregando',
    locationGoogleMapsFoundSuccessfully: 'Yeaah!!! A localização no google maps foi encontrada com sucesso!',
    locationFoundSuccessfully: 'Yeaah!!! A localização foi encontrada com sucesso!',
    searchLocationByPostalCode: 'Buscando a localização pelo CEP.',
    searchLocationOnGoogleMaps: 'Buscando a localização no google maps.',
    selectPhotos: 'Selecionar fotos'
  }
});

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ "./assets/css/main.scss");
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/features/object/assign */ "./node_modules/core-js/features/object/assign.js");
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var admin_lte_plugins_bootstrap_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin-lte/plugins/bootstrap/js/bootstrap.bundle.min */ "./node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js");
/* harmony import */ var admin_lte_plugins_bootstrap_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(admin_lte_plugins_bootstrap_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/toast */ "./node_modules/bootstrap/js/dist/toast.js");
/* harmony import */ var bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/js/dist/tooltip */ "./node_modules/bootstrap/js/dist/tooltip.js");
/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var admin_lte_dist_js_adminlte_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin-lte/dist/js/adminlte.min */ "./node_modules/admin-lte/dist/js/adminlte.min.js");
/* harmony import */ var admin_lte_dist_js_adminlte_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(admin_lte_dist_js_adminlte_min__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sulu/web */ "./node_modules/@sulu/web/packages/core/core.js");
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sulu_web__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_address_information__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/address-information */ "./assets/js/components/address-information.js");
/* harmony import */ var _components_auto_complete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auto-complete */ "./assets/js/components/auto-complete.js");
/* harmony import */ var _components_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/datepicker */ "./assets/js/components/datepicker.js");
/* harmony import */ var _components_phone_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/phone-number */ "./assets/js/components/phone-number.js");
/* harmony import */ var _components_button_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/button-loading */ "./assets/js/components/button-loading.js");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/toast */ "./assets/js/services/toast.js");
/* harmony import */ var _services_translate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/translate */ "./assets/js/services/translate.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// CSS you import will output into a single css file (main.css in this case)


// Plugins







// Components






// Import Services here.



// Main scripts to execute.
window.$ = __webpack_provided_window_dot_jQuery = $;
window.web = (_sulu_web__WEBPACK_IMPORTED_MODULE_6___default());

// Enable tooltip from bootstrap.
$('[data-toggle="tooltip"]').tooltip();

/***/ }),

/***/ "./assets/js/services/toast.js":
/*!*************************************!*\
  !*** ./assets/js/services/toast.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sulu/web */ "./node_modules/@sulu/web/packages/core/core.js");
/* harmony import */ var _sulu_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sulu_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Service for display toast.
 * Documentation of Toast Bootstrap here: https://getbootstrap.com/docs/4.3/components/toasts/
 */
_sulu_web__WEBPACK_IMPORTED_MODULE_2___default().registerService('toast', {
  /**
   * @param title Title of toast popup.
   * @param body Content of toast popup.
   * @param position Define position of toast popup with "top-center" or "bottom-right" (default).
   * @param themeColor Define the theme color. Available: "black".
   * @return {*|jQuery}
   */
  show: function show(title, body) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bottom-right';
    var themeColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var $document = jquery__WEBPACK_IMPORTED_MODULE_3___default()(document);
    var $oldToast = $document.find('.js-toast');
    var additionalClass = '';
    if (0 < $oldToast.length) {
      $oldToast.remove();
    }
    additionalClass = themeColor ? " toast-".concat(themeColor) : '';
    var html = '<div class="toast' + additionalClass + ' --' + position + ' js-toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">' + '  <div class="toast-header">' + '    <strong class="mr-auto js-toast-title">' + title + '</strong>' + '    <small class="js-toast-title-small"></small>' + '    <button type="button" class="ml-2 mb-1 close js-toast-close" data-dismiss="toast" aria-label="Close">' + '      <span aria-hidden="true">&times;</span>' + '    </button>' + '  </div>' + '  <div class="toast-body js-toast-body">' + body + '</div>' + '</div>';
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('body').append(html);
    var $newToast = jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).find('.js-toast');
    $newToast.toast('show');
    return $newToast;
  }
});

/***/ }),

/***/ "./assets/js/services/translate.js":
/*!*****************************************!*\
  !*** ./assets/js/services/translate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/translations */ "./assets/js/constants/translations.js");

web.registerService('translate', {
  locale: document.documentElement.lang,
  /**
   * @param {String} key Translate string key.
   * @return {String}
   */
  text: function text(key) {
    var _TRANSLATIONS$this$lo;
    if (!this.locale) {
      return '';
    }
    return (_TRANSLATIONS$this$lo = _constants_translations__WEBPACK_IMPORTED_MODULE_0__["default"][this.locale][key]) !== null && _TRANSLATIONS$this$lo !== void 0 ? _TRANSLATIONS$this$lo : '';
  }
});

/***/ }),

/***/ "./assets/css/main.scss":
/*!******************************!*\
  !*** ./assets/css/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_sulu_web_packages_core_core_js-node_modules_admin-lte_dist_js_adminlte_m-501f93"], () => (__webpack_exec__("./assets/js/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0osQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2hCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkZHJlc3MtaW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9idXR0b24tbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9kYXRlcGlja2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bob25lLW51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29uc3RhbnRzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnN0YW50cy9odG1sLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25zdGFudHMvbG9jYWxlLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnN0YW50cy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnN0YW50cy90cmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VzL3RvYXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXJ2aWNlcy90cmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9tYWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYiBmcm9tICdAc3VsdS93ZWInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDTEFTU0VTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc2VzJztcbmltcG9ydCBST1VURVMgZnJvbSBcIi4uL2NvbnN0YW50cy9yb3V0ZXNcIjtcbmltcG9ydCBIVE1MIGZyb20gXCIuLi9jb25zdGFudHMvaHRtbFwiO1xuXG4vKipcbiAqIEFkZHJlc3MgaW5mb3JtYXRpb24gY29tcG9uZW50IGlzIGEgZmVhdHVyZSB3aGVyZSBoYXZlIGFsbCBzY3JpcHQgZm9yIGFkZHJlc3MgaW5mb3JtYXRpb24gaW4gYSBmb3JtLlxuICovXG5jbGFzcyBBZGRyZXNzSW5mb3JtYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICRlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubG9jYWxlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuYXBpVG9rZW5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5hcGlLZXlcbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCRlbCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRlbCA9ICQoJGVsKTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLm1hcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZ29vZ2xlUmVzdWx0cyA9IHt9O1xuICAgICAgICB0aGlzLmNsYXNzQ291bnRyeSA9ICcuanMtYWRkcmVzcy1pbmZvLWNvdW50cnknO1xuXG4gICAgICAgIHRoaXMuJG1hcCA9IHRoaXMuJGVsLmZpbmQoJy5qcy1hZGRyZXNzLWluZm8tZ29vZ2xlLW1hcCcpO1xuICAgICAgICB0aGlzLiRtYXBEaXNwbGF5ID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mby1nb29nbGUtbWFwLWRpc3BsYXknKTtcbiAgICAgICAgdGhpcy4kdXBkYXRlTWFwID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mby11cGRhdGUtZ29vZ2xlLW1hcCcpO1xuICAgICAgICB0aGlzLiRsYXRJbnB1dCA9IHRoaXMuJGVsLmZpbmQoJy5qcy1hZGRyZXNzLWluZm8tbGF0Jyk7XG4gICAgICAgIHRoaXMuJGxuZ0lucHV0ID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mby1sbmcnKTtcbiAgICAgICAgdGhpcy4kYWRkcmVzc0lucHV0ID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mby1hZGRyZXNzJyk7XG4gICAgICAgIHRoaXMuJHN0cmVldE51bWJlcklucHV0ID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mby1zdHJlZXQtbnVtYmVyJyk7XG4gICAgICAgIHRoaXMuJHBvc3RhbENvZGVJbnB1dCA9IHRoaXMuJGVsLmZpbmQoJy5qcy1hZGRyZXNzLWluZm8tcG9zdGFsLWNvZGUnKTtcbiAgICAgICAgdGhpcy4kY291bnRyeUlucHV0ID0gdGhpcy4kZWwuZmluZCh0aGlzLmNsYXNzQ291bnRyeSk7XG4gICAgICAgIHRoaXMuJHN0YXRlSW5wdXQgPSB0aGlzLiRlbC5maW5kKCcuanMtYWRkcmVzcy1pbmZvLXN0YXRlJyk7XG4gICAgICAgIHRoaXMuJGNpdHlJbnB1dCA9IHRoaXMuJGVsLmZpbmQoJy5qcy1hZGRyZXNzLWluZm8tY2l0eScpO1xuICAgICAgICB0aGlzLiRuZWlnaGJvcmhvb2RJbnB1dCA9IHRoaXMuJGVsLmZpbmQoJy5qcy1hZGRyZXNzLWluZm8tbmVpZ2hib3Job29kJyk7XG4gICAgICAgIHRoaXMuJGNvbXBsZW1lbnRJbnB1dCA9IHRoaXMuJGVsLmZpbmQoJy5qcy1hZGRyZXNzLWluZm8tY29tcGxlbWVudCcpO1xuICAgICAgICB0aGlzLiRwb3N0YWxDb2RlQnV0dG9uID0gdGhpcy4kZWwuZmluZCgnLmpzLWJ0bi1hZGRyZXNzLWluZm8tcG9zdGFsLWNvZGUnKTtcbiAgICAgICAgdGhpcy4kZm9ybWF0dGVkQWRkcmVzc0lucHV0ID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mby1mb3JtYXR0ZWQtYWRkcmVzcycpO1xuICAgICAgICB0aGlzLiRidG5Qb3N0YWxDb2RlTG9hZGVyID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mb19fYnRuLXBvc3RhbC1jb2RlLWxvYWRlcicpO1xuICAgICAgICB0aGlzLiRidG5Hb29nbGVNYXBzTG9hZGVyID0gdGhpcy4kZWwuZmluZCgnLmpzLWFkZHJlc3MtaW5mb19fYnRuLWdvb2dsZS1tYXBzLWxvYWRlcicpO1xuXG4gICAgICAgIHRoaXMudG9hc3QgPSB3ZWIuZ2V0U2VydmljZSgndG9hc3QnKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB3ZWIuZ2V0U2VydmljZSgndHJhbnNsYXRlJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkR29vZ2xlTWFwKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR1cGRhdGVNYXAub24oJ2NsaWNrJywgdGhpcy5vblVwZGF0ZUdvb2dsZU1hcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy4kcG9zdGFsQ29kZUJ1dHRvbi5vbignY2xpY2snLCB0aGlzLnNlYXJjaExvY2F0aW9uRnJvbVBvc3RhbENvZGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuJHBvc3RhbENvZGVJbnB1dC5vbignY2hhbmdlJywgdGhpcy5zZWFyY2hMb2NhdGlvbkZyb21Qb3N0YWxDb2RlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLiRzdGF0ZUlucHV0Lm9uKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlU3RhdGVJbnB1dC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoZSBnb29nbGUgbWFwIChzY3JpcHQgdGFnKSB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGxvYWRHb29nbGVNYXAoKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLm9wdGlvbnMuYXBpS2V5O1xuXG4gICAgICAgIC8vIERlZmluZSBwdWJsaWNseSBjYWxsYWJsZSBjYWxsYmFjayBtZXRob2QuXG4gICAgICAgIHdpbmRvdy5vbk1hcExvYWRlZCA9IHRoaXMuaW5pdEdvb2dsZU1hcC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2xhbmd1YWdlPScgKyB0aGlzLm9wdGlvbnMubG9jYWxlICsgJyZjYWxsYmFjaz1vbk1hcExvYWRlZCc7XG5cbiAgICAgICAgLy8gTm8ga2V5IGZvciBsb2NhbCBkZXZlbG9wbWVudCwgYnV0IGlmIGtleSBpcyBhdmFpbGFibGUgKHByb2R1Y3Rpb24pIHdlIG5lZWQgdG8gZGVmaW5lIGl0LlxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gc2NyaXB0LnNyYyArICcma2V5PScgKyBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBlbmQgc2NyaXB0LlxuICAgICAgICB0aGlzLiRib2R5LmFwcGVuZChzY3JpcHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBnb29nbGUgbWFwLlxuICAgICAqL1xuICAgIGluaXRHb29nbGVNYXAoKSB7XG4gICAgICAgIC8vIFNldCBiYXNpYyBjb25maWcuXG4gICAgICAgIHRoaXMubWFwID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5NYXAodGhpcy4kbWFwRGlzcGxheS5nZXQoMCksIHtcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB3aW5kb3cuZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX1RPUCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIGV4aXN0IGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb24gZm9ybSwgdGhlbiB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICAgICAgY29uc3QgbGF0ID0gdGhpcy4kbGF0SW5wdXQudmFsKCk7XG4gICAgICAgIGNvbnN0IGxuZyA9IHRoaXMuJGxuZ0lucHV0LnZhbCgpO1xuXG4gICAgICAgIGlmIChsYXQgJiYgbG5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1hcmtlck9uR29vZ2xlTWFwcyhsYXQsIGxuZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWFya2VyIG9uIGdvb2dsZSBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGF0aXR1ZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbG9uZ2l0dWRlXG4gICAgICovXG4gICAgc2V0TWFya2VyT25Hb29nbGVNYXBzKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICAgICAgaWYgKCFsYXRpdHVkZSB8fCAhbG9uZ2l0dWRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRtYXAuYWRkQ2xhc3MoQ0xBU1NFUy5JU19MT0FESU5HKTtcblxuICAgICAgICAvLyBEZWxldGUgY3VycmVudCBtYXJrZXIgb24gZ29vZ2xlIG1hcHMgaWYgZXhpc3QuXG4gICAgICAgIGlmICh0aGlzLm1hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib3VuZHMgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgICAgIGNvbnN0IGxhdGxuZyA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuXG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogbGF0bG5nLFxuICAgICAgICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuYWRkTGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLm9uRHJhZ2VuZE1hcmtlci5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmJvdW5kcy5leHRlbmQobGF0bG5nKTtcblxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5ib3VuZHMpO1xuXG4gICAgICAgIC8vIFNldCBhIHNtYWxsIGRlbGF5IHRvIHNldCBjb3JyZWN0bHkgem9vbSBvbiBnb29nbGUgbWFwLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG1hcC5yZW1vdmVDbGFzcyhDTEFTU0VTLklTX0xPQURJTkcpO1xuICAgICAgICAgICAgdGhpcy5tYXAuc2V0Wm9vbSgxNik7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBkcmFnZW5kIG9mIG1hcmtlci5cbiAgICAgKi9cbiAgICBvbkRyYWdlbmRNYXJrZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbGF0ID0gZXZlbnQubGF0TG5nLmxhdCgpO1xuICAgICAgICBjb25zdCBsbmcgPSBldmVudC5sYXRMbmcubG5nKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVDb29yZGluYXRlc0ZpZWxkcyhsYXQsIGxuZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNvb3JkaW5hdGVzIG9uIGZvcm0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGF0aXR1ZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbG9uZ2l0dWRlXG4gICAgICovXG4gICAgdXBkYXRlQ29vcmRpbmF0ZXNGaWVsZHMobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgICAgICB0aGlzLiRsYXRJbnB1dC52YWwobGF0aXR1ZGUpO1xuICAgICAgICB0aGlzLiRsbmdJbnB1dC52YWwobG9uZ2l0dWRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgbWFya2VyIG9uIGdvb2dsZSBtYXBzLlxuICAgICAqL1xuICAgIG9uVXBkYXRlR29vZ2xlTWFwKCkge1xuICAgICAgICAvLyBFbXB0eSBjb29yZGluYXRlcyB2YWx1ZXMgYW5kIGZvcm1hdHRlZCBhZGRyZXNzLlxuICAgICAgICB0aGlzLiRmb3JtYXR0ZWRBZGRyZXNzSW5wdXQudmFsKCcnKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb29yZGluYXRlc0ZpZWxkcygnJywnJyk7XG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VMb2FkaW5nR29vZ2xlTWFwcygpO1xuICAgICAgICB0aGlzLiRtYXAuYWRkQ2xhc3MoQ0xBU1NFUy5JU19MT0FESU5HKTtcblxuICAgICAgICBsZXQgcGFyYW0gPSB7fTtcbiAgICAgICAgbGV0IHJlc3RyaWN0aW9ucyA9IHt9O1xuICAgICAgICBsZXQgYXJyTG9jYXRpb24gPSBbXTtcblxuICAgICAgICBjb25zdCBjb3VudHJ5QWxwaGEyID0gdGhpcy4kY291bnRyeUlucHV0LmF0dHIoJ2RhdGEtYXV0by1jb21wbGV0ZS1hbHBoYTInKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLiRzdGF0ZUlucHV0LnZhbCgpO1xuICAgICAgICBjb25zdCBjaXR5ID0gdGhpcy4kY2l0eUlucHV0LnZhbCgpO1xuICAgICAgICBjb25zdCBuZWlnaGJvcmhvb2QgPSB0aGlzLiRuZWlnaGJvcmhvb2RJbnB1dC52YWwoKTtcbiAgICAgICAgY29uc3QgcG9zdGFsQ29kZSA9IHRoaXMuJHBvc3RhbENvZGVJbnB1dC52YWwoKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuJGFkZHJlc3NJbnB1dC52YWwoKTtcbiAgICAgICAgY29uc3Qgc3RyZWV0TnVtYmVyID0gdGhpcy4kc3RyZWV0TnVtYmVySW5wdXQudmFsKCk7XG4gICAgICAgIGNvbnN0IGNvbXBsZW1lbnQgPSB0aGlzLiRjb21wbGVtZW50SW5wdXQudmFsKCk7XG5cbiAgICAgICAgaWYgKHBvc3RhbENvZGUpIHtcbiAgICAgICAgICAgIHJlc3RyaWN0aW9ucy5wb3N0YWxDb2RlID0gcG9zdGFsQ29kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudHJ5QWxwaGEyKSB7XG4gICAgICAgICAgICByZXN0cmljdGlvbnMuY291bnRyeSA9IGNvdW50cnlBbHBoYTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdHJpY3Rpb25zKSB7XG4gICAgICAgICAgICBwYXJhbS5jb21wb25lbnRSZXN0cmljdGlvbnMgPSByZXN0cmljdGlvbnM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcGxlbWVudCkge1xuICAgICAgICAgICAgYXJyTG9jYXRpb24ucHVzaChjb21wbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZGRyZXNzKSB7XG4gICAgICAgICAgICBsZXQgc3RyZWV0ID0gYWRkcmVzcztcblxuICAgICAgICAgICAgaWYgKHN0cmVldE51bWJlcikge1xuICAgICAgICAgICAgICAgIHN0cmVldCA9IHN0cmVldCArICcgJyArIHN0cmVldE51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyTG9jYXRpb24ucHVzaChzdHJlZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5laWdoYm9yaG9vZCkge1xuICAgICAgICAgICAgYXJyTG9jYXRpb24ucHVzaChuZWlnaGJvcmhvb2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNpdHkpIHtcbiAgICAgICAgICAgIGFyckxvY2F0aW9uLnB1c2goY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGFyckxvY2F0aW9uLnB1c2goc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50cnlBbHBoYTIpIHtcbiAgICAgICAgICAgIGFyckxvY2F0aW9uLnB1c2goY291bnRyeUFscGhhMik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbS5hZGRyZXNzID0gYXJyTG9jYXRpb24uam9pbignLCAnKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBTZWUgZG9jdW1lbnRhdGlvbjpcbiAgICAgICAgICogLSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZW9jb2RpbmdcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXG4gICAgICAgIGdlb2NvZGVyLmdlb2NvZGUocGFyYW0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmICgnT0snID09PSBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRBZGRyZXNzID0gcmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICBjb25zdCBsYXQgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxuZyA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtYXR0ZWRBZGRyZXNzSW5wdXQudmFsKGZvcm1hdHRlZEFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29vcmRpbmF0ZXNGaWVsZHMobGF0LCBsbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFya2VyT25Hb29nbGVNYXBzKGxhdCwgbG5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VMb2NhdGlvbkxvYWRlZEdvb2dsZU1hcHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignR2VvY29kZSB3YXMgbm90IHN1Y2Nlc3NmdWwgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOiAnICsgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRtYXAucmVtb3ZlQ2xhc3MoQ0xBU1NFUy5JU19MT0FESU5HKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uR29vZ2xlTWFwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGxvY2F0aW9uIChzdGF0ZSwgY2l0eSBhbmQgbmVpZ2hib3Job29kKSB0aHJvdWdoIHBvc3RhbCBjb2RlIHdpdGggR29vZ2xlIFNlcnZpY2UuXG4gICAgICovXG4gICAgc2VhcmNoTG9jYXRpb25Gcm9tUG9zdGFsQ29kZSgpIHtcbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZUxvYWRpbmdMb2NhdGlvbkJ5UG9zdGFsQ29kZSgpO1xuXG4gICAgICAgIGxldCBhZGRyZXNzID0gW107XG4gICAgICAgIGxldCByZXN0cmljdGlvbnMgPSB7fTtcblxuICAgICAgICBjb25zdCBwb3N0YWxDb2RlID0gdGhpcy4kcG9zdGFsQ29kZUlucHV0LnZhbCgpO1xuICAgICAgICBjb25zdCBjb3VudHJ5QWxwaGEyID0gdGhpcy4kY291bnRyeUlucHV0LmF0dHIoJ2RhdGEtYXV0by1jb21wbGV0ZS1hbHBoYTInKTtcbiAgICAgICAgY29uc3QgY291bnRyeUlkID0gdGhpcy4kY291bnRyeUlucHV0LmF0dHIoJ2RhdGEtYXV0by1jb21wbGV0ZS12YWx1ZScpO1xuXG4gICAgICAgIGlmICghcG9zdGFsQ29kZSkge1xuICAgICAgICAgICAgYWxlcnQoJ1Bvc3RhbCBjb2RlIHNob3VsZCBiZSBpbmZvcm0uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvdW50cnlBbHBoYTIpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdDb3VudHJ5IHNob3VsZCBiZSBpbmZvcm0uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtcHR5U3ViRmllbGRzKCk7XG5cbiAgICAgICAgaWYgKHBvc3RhbENvZGUpIHtcbiAgICAgICAgICAgIHJlc3RyaWN0aW9ucy5wb3N0YWxDb2RlID0gcG9zdGFsQ29kZTtcbiAgICAgICAgICAgIGFkZHJlc3MucHVzaChwb3N0YWxDb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudHJ5QWxwaGEyKSB7XG4gICAgICAgICAgICByZXN0cmljdGlvbnMuY291bnRyeSA9IGNvdW50cnlBbHBoYTI7XG4gICAgICAgICAgICBhZGRyZXNzLnB1c2goY291bnRyeUFscGhhMik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbSA9IHthZGRyZXNzOiBhZGRyZXNzLmpvaW4oJywgJyksIGNvbXBvbmVudFJlc3RyaWN0aW9uczogcmVzdHJpY3Rpb25zfTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBTZWUgZG9jdW1lbnRhdGlvbjpcbiAgICAgICAgICogLSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZW9jb2RpbmdcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXG4gICAgICAgIGdlb2NvZGVyLmdlb2NvZGUocGFyYW0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmICgnT0snID09PSBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRMb2NhdGlvbkRyb3Bkb3ducyhyZXN1bHRzWzBdLCBjb3VudHJ5SWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uQnlQb3N0YWxDb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignR2VvY29kZSB3YXMgbm90IHN1Y2Nlc3NmdWwgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOiAnICsgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGRyb3Bkb3duIGZpZWxkcyB3aXRoIHRoZSByZXN1bHRzIG9mIEdvb2dsZSBTZXJ2aWNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3VsdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY291bnRyeUlkXG4gICAgICovXG4gICAgbG9hZExvY2F0aW9uRHJvcGRvd25zKHJlc3VsdHMsIGNvdW50cnlJZCkge1xuICAgICAgICBpZih1bmRlZmluZWQgPT09IHJlc3VsdHMuYWRkcmVzc19jb21wb25lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uQnlQb3N0YWxDb2RlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCByZXN1bHRzIGZyb20gZ29vZ2xlLlxuICAgICAgICB0aGlzLmdvb2dsZVJlc3VsdHMgPSB7fTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBEb2N1bWVudGF0aW9uIHdoZXJlIGV4cGxhaW4gYWxsIGZpZWxkcyBvZiBHb29nbGUgTWFwczpcbiAgICAgICAgICogLSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZW9jb2RpbmcjR2VvY29kaW5nQWRkcmVzc1R5cGVzXG4gICAgICAgICAqL1xuICAgICAgICAkLm1hcCggcmVzdWx0cy5hZGRyZXNzX2NvbXBvbmVudHMsICggYWRkcmVzcyApID0+IHtcbiAgICAgICAgICAgIC8vIEdldCBuZWlnaGJvcmhvb2QuXG4gICAgICAgICAgICBpZiAoJC5pbkFycmF5KCdzdWJsb2NhbGl0eScsIGFkZHJlc3MudHlwZXMpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5nb29nbGVSZXN1bHRzLm5laWdoYm9yaG9vZCA9IGFkZHJlc3MubG9uZ19uYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXQgY2l0eS5cbiAgICAgICAgICAgIGlmICgkLmluQXJyYXkoJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMicsIGFkZHJlc3MudHlwZXMpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5nb29nbGVSZXN1bHRzLmNpdHkgPSBhZGRyZXNzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0IHN0YXRlLlxuICAgICAgICAgICAgaWYgKCQuaW5BcnJheSgnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xJywgYWRkcmVzcy50eXBlcykgIT09IC0xKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdvb2dsZVJlc3VsdHMuc3RhdGUgPSBhZGRyZXNzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgbmVlZCB0byBkZWJ1ZyBpbmZvcm1hdGlvbiBmcm9tIGdvb2dsZS5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nb29nbGVSZXN1bHRzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlZCBkcm9wZG93biBvZiBzdGF0ZXMgYW5kIHNlbGV0ZWQgY29ycmVjdGx5IG9wdGlvbi5cbiAgICAgKi9cbiAgICB1cGRhdGVEcm9wZG93blN0YXRlcygpIHtcbiAgICAgICAgY29uc3QgY291bnRyeUlkID0gdGhpcy4kZWwuZmluZCh0aGlzLmNsYXNzQ291bnRyeSArICdbdHlwZT1cImhpZGRlblwiXScpLnZhbCgpO1xuXG4gICAgICAgIHRoaXMuZW1wdHlEcm9wZG93bih0aGlzLiRzdGF0ZUlucHV0KTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnLycgKyB0aGlzLm9wdGlvbnMubG9jYWxlICsgUk9VVEVTLkxPQ0FUSU9OX1NUQVRFUyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5SWQ6IGNvdW50cnlJZCxcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5vcHRpb25zLmFwaVRva2VuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICBlcnJvcjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGVcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uQnlQb3N0YWxDb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWVuYWJsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlcyA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IHJlc3BvbnNlLnN1Y2Nlc3MgfHwgMCA9PT0gc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uQnlQb3N0YWxDb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1lbmFibGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IHN0YXRlcyBvbiBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICAkLm1hcCggc3RhdGVzLCAoIHN0YXRlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZUlucHV0LmFwcGVuZCgkKCc8b3B0aW9uPicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdGF0ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0YXRlLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdvb2dsZVJlc3VsdHMuc3RhdGUgPT09IHN0YXRlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0YXRlSW5wdXQudmFsKHN0YXRlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bkNpdGllcygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlZCBkcm9wZG93biBvZiBjaXRpZXMgYW5kIHNlbGVjdGVkIGNvcnJlY3RseSBvcHRpb24uXG4gICAgICovXG4gICAgdXBkYXRlRHJvcGRvd25DaXRpZXMoKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlSWQgPSB0aGlzLiRzdGF0ZUlucHV0LnZhbCgpO1xuXG4gICAgICAgIHRoaXMuZW1wdHlEcm9wZG93bih0aGlzLiRjaXR5SW5wdXQpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvJyArIHRoaXMub3B0aW9ucy5sb2NhbGUgKyBST1VURVMuTE9DQVRJT05fQ0lUSUVTLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHN0YXRlSWQ6IHN0YXRlSWQsXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMub3B0aW9ucy5hcGlUb2tlblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgZXJyb3I6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlTm90Rm91bmRMb2NhdGlvbkJ5UG9zdGFsQ29kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1lbmFibGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSByZXNwb25zZS5zdWNjZXNzIHx8IDAgPT09IGNpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlTm90Rm91bmRMb2NhdGlvbkJ5UG9zdGFsQ29kZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZW5hYmxlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBjaXRpZXMgb24gZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgJC5tYXAoIGNpdGllcywgKCBjaXR5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaXR5SW5wdXQuYXBwZW5kKCQoJzxvcHRpb24+Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNpdHkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjaXR5Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdvb2dsZVJlc3VsdHMuY2l0eSA9PT0gY2l0eS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaXR5SW5wdXQudmFsKGNpdHkuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRuZWlnaGJvcmhvb2RJbnB1dC52YWwodGhpcy5nb29nbGVSZXN1bHRzLm5laWdoYm9yaG9vZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VMb2NhdGlvbkxvYWRlZEJ5UG9zdGFsQ29kZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNoYW5nZSBzdGF0ZSwgd2lsbCBiZSBsaXN0IGNvcnJlY3QgY2l0aWVzIG9mIHNlbGVjdGVkIHN0YXRlIGFuZCByZXNldCBuZWlnaGJvcmhvb2QgZmllbGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNoYW5nZVN0YXRlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKCFzdGF0ZUlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtcHR5RHJvcGRvd24odGhpcy4kY2l0eUlucHV0KTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnLycgKyB0aGlzLm9wdGlvbnMubG9jYWxlICsgUk9VVEVTLkxPQ0FUSU9OX0NJVElFUyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzdGF0ZUlkOiBzdGF0ZUlkLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLm9wdGlvbnMuYXBpVG9rZW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIGVycm9yOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1lbmFibGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaXRpZXMgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSByZXNwb25zZS5zdWNjZXNzIHx8IDAgPT09IGNpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWVuYWJsZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgY2l0aWVzIG9uIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgICQubWFwKCBjaXRpZXMsICggY2l0eSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2l0eUlucHV0LmFwcGVuZCgkKCc8b3B0aW9uPicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaXR5LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY2l0eS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5laWdoYm9yaG9vZElucHV0LnZhbCgnJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbXB0eSBkcm9wZG93biBmaWVsZCA8c2VsZWN0Pi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAkc2VsZWN0XG4gICAgICovXG4gICAgZW1wdHlEcm9wZG93bigkc2VsZWN0KSB7XG4gICAgICAgIGxldCAkb3B0aW9ucyA9ICRzZWxlY3QuZmluZCgnb3B0aW9uJyk7XG5cbiAgICAgICAgJC5tYXAoICRvcHRpb25zLCAoIG9wdGlvbiApID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmICgnJyAhPT0gJG9wdGlvbi5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1wdHkgYWxsIHN1Yi1maWVsZHMgKHN0YXRlLCBjaXR5LCBuZWlnaGJvcmhvb2QsIGFkZHJlc3MsIHN0cmVldCBudW1iZXIsIGNvbXBsZW1lbnQsIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUpLlxuICAgICAqL1xuICAgIGVtcHR5U3ViRmllbGRzKCkge1xuICAgICAgICB0aGlzLmVtcHR5RHJvcGRvd24odGhpcy4kc3RhdGVJbnB1dCk7XG4gICAgICAgIHRoaXMuZW1wdHlEcm9wZG93bih0aGlzLiRjaXR5SW5wdXQpO1xuICAgICAgICB0aGlzLiRuZWlnaGJvcmhvb2RJbnB1dC52YWwoJycpO1xuICAgICAgICB0aGlzLiRhZGRyZXNzSW5wdXQudmFsKCcnKTtcbiAgICAgICAgdGhpcy4kc3RyZWV0TnVtYmVySW5wdXQudmFsKCcnKTtcbiAgICAgICAgdGhpcy4kY29tcGxlbWVudElucHV0LnZhbCgnJyk7XG4gICAgICAgIHRoaXMuJGxhdElucHV0LnZhbCgnJyk7XG4gICAgICAgIHRoaXMuJGxuZ0lucHV0LnZhbCgnJyk7XG4gICAgICAgIHRoaXMuJGZvcm1hdHRlZEFkZHJlc3NJbnB1dC52YWwoJycpO1xuICAgIH1cblxuICAgIHNob3dNZXNzYWdlTG9hZGluZ0xvY2F0aW9uQnlQb3N0YWxDb2RlKCkge1xuICAgICAgICB0aGlzLiRidG5Qb3N0YWxDb2RlTG9hZGVyLmFkZENsYXNzKENMQVNTRVMuSVNfVklTSUJMRSk7XG4gICAgICAgIHRoaXMuY3VycmVudFRvYXN0ID0gdGhpcy50b2FzdC5zaG93KFxuICAgICAgICAgICAgYDxpIGNsYXNzPVwiZmFzIGZhLWhvdXJnbGFzcy1oYWxmIG1yLTFcIj48L2k+ICR7dGhpcy50cmFuc2xhdGUudGV4dCgnbG9hZGluZycpfSR7SFRNTC5USFJFRV9ET1RTX0FOSU19YCxcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnRleHQoJ3NlYXJjaExvY2F0aW9uQnlQb3N0YWxDb2RlJyksXG4gICAgICAgICAgICAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgICAgICdibGFjaydcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG93TWVzc2FnZUxvYWRpbmdHb29nbGVNYXBzKCkge1xuICAgICAgICB0aGlzLiRidG5Hb29nbGVNYXBzTG9hZGVyLmFkZENsYXNzKENMQVNTRVMuSVNfVklTSUJMRSk7XG4gICAgICAgIHRoaXMuY3VycmVudFRvYXN0ID0gdGhpcy50b2FzdC5zaG93KFxuICAgICAgICAgICAgYDxpIGNsYXNzPVwiZmFzIGZhLWhvdXJnbGFzcy1oYWxmIG1yLTFcIj48L2k+ICR7dGhpcy50cmFuc2xhdGUudGV4dCgnbG9hZGluZycpfSR7SFRNTC5USFJFRV9ET1RTX0FOSU19YCxcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnRleHQoJ3NlYXJjaExvY2F0aW9uT25Hb29nbGVNYXBzJyksXG4gICAgICAgICAgICAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgICAgICdibGFjaydcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlTG9jYXRpb25Mb2FkZWRCeVBvc3RhbENvZGUoKSB7XG4gICAgICAgIHRoaXMuJHBvc3RhbENvZGVCdXR0b24udG9vbHRpcCgnaGlkZScpO1xuICAgICAgICB0aGlzLiRidG5Qb3N0YWxDb2RlTG9hZGVyLnJlbW92ZUNsYXNzKENMQVNTRVMuSVNfVklTSUJMRSk7XG4gICAgICAgIHRoaXMuY3VycmVudFRvYXN0LmZpbmQoJy5qcy10b2FzdC10aXRsZScpLmh0bWwoYDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZSBtci0xXCI+PC9pPiAke3RoaXMudHJhbnNsYXRlLnRleHQoJ2RvbmUnKX1gKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VG9hc3QuZmluZCgnLmpzLXRvYXN0LWJvZHknKS5odG1sKHRoaXMudHJhbnNsYXRlLnRleHQoJ2xvY2F0aW9uRm91bmRTdWNjZXNzZnVsbHknKSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2FzdC50b2FzdCgnaGlkZScpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlTG9jYXRpb25Mb2FkZWRHb29nbGVNYXBzKCkge1xuICAgICAgICB0aGlzLiRidG5Hb29nbGVNYXBzTG9hZGVyLnJlbW92ZUNsYXNzKENMQVNTRVMuSVNfVklTSUJMRSk7XG4gICAgICAgIHRoaXMuY3VycmVudFRvYXN0LmZpbmQoJy5qcy10b2FzdC10aXRsZScpLmh0bWwoYDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZSBtci0xXCI+PC9pPiAke3RoaXMudHJhbnNsYXRlLnRleHQoJ2RvbmUnKX1gKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VG9hc3QuZmluZCgnLmpzLXRvYXN0LWJvZHknKS5odG1sKHRoaXMudHJhbnNsYXRlLnRleHQoJ2xvY2F0aW9uR29vZ2xlTWFwc0ZvdW5kU3VjY2Vzc2Z1bGx5JykpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VG9hc3QudG9hc3QoJ2hpZGUnKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgbWVzc2FnZU5vdEZvdW5kTG9jYXRpb25CeVBvc3RhbENvZGUoKSB7XG4gICAgICAgIHRoaXMuJGJ0blBvc3RhbENvZGVMb2FkZXIucmVtb3ZlQ2xhc3MoQ0xBU1NFUy5JU19WSVNJQkxFKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VG9hc3QuZmluZCgnLmpzLXRvYXN0LXRpdGxlJykuaHRtbChgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgbXItMVwiPjwvaT4gJHt0aGlzLnRyYW5zbGF0ZS50ZXh0KCdub3RGb3VuZCcpfWApO1xuICAgICAgICB0aGlzLmN1cnJlbnRUb2FzdC5maW5kKCcuanMtdG9hc3QtYm9keScpLmh0bWwodGhpcy50cmFuc2xhdGUudGV4dCgnbm90Rm91bmRMb2NhdGlvbkJ5UG9zdGFsQ29kZScpKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRvYXN0LnRvYXN0KCdoaWRlJyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cblxuICAgIG1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uR29vZ2xlTWFwcygpIHtcbiAgICAgICAgdGhpcy4kYnRuR29vZ2xlTWFwc0xvYWRlci5yZW1vdmVDbGFzcyhDTEFTU0VTLklTX1ZJU0lCTEUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUb2FzdC5maW5kKCcuanMtdG9hc3QtdGl0bGUnKS5odG1sKGA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBtci0xXCI+PC9pPiAke3RoaXMudHJhbnNsYXRlLnRleHQoJ25vdEZvdW5kJyl9YCk7XG4gICAgICAgIHRoaXMuY3VycmVudFRvYXN0LmZpbmQoJy5qcy10b2FzdC1ib2R5JykuaHRtbCh0aGlzLnRyYW5zbGF0ZS50ZXh0KCdub3RGb3VuZExvY2F0aW9uT25Hb29nbGVNYXBzJykpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VG9hc3QudG9hc3QoJ2hpZGUnKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxufVxuXG53ZWIucmVnaXN0ZXJDb21wb25lbnQoJ2FkZHJlc3MtaW5mb3JtYXRpb24nLCBBZGRyZXNzSW5mb3JtYXRpb24pO1xuIiwiaW1wb3J0IHdlYiBmcm9tICdAc3VsdS93ZWInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDTEFTU0VTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc2VzJztcblxuLyoqXG4gKiBBdXRvQ29tcGxldGUgY29tcG9uZW50LlxuICovXG5jbGFzcyBBdXRvQ29tcGxldGUge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICRlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMudXJsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLm1ldGhvZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMuYXR0clxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmRhdGFOb2RlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5kYXRhVGV4dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmRhdGFWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmNsYXNzRGl2UmVzdWx0c1xuICAgICAqL1xuICAgIGluaXRpYWxpemUoJGVsLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGVsID0gJCgkZWwpO1xuICAgICAgICB0aGlzLiRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICAgICAgICB0aGlzLndpbmRvdyA9ICQod2luZG93KTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZGF0YU5vZGUgPSB1bmRlZmluZWQgPT09IHRoaXMub3B0aW9ucy5kYXRhTm9kZSA/ICdkYXRhJyA6IHRoaXMub3B0aW9ucy5kYXRhTm9kZTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRhdGFUZXh0ID0gdW5kZWZpbmVkID09PSB0aGlzLm9wdGlvbnMuZGF0YVRleHQgPyBbJ25hbWUnXSA6IHRoaXMub3B0aW9ucy5kYXRhVGV4dDtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRhdGFWYWx1ZSA9IHVuZGVmaW5lZCA9PT0gdGhpcy5vcHRpb25zLmRhdGFWYWx1ZSA/ICdpZCcgOiB0aGlzLm9wdGlvbnMuZGF0YVZhbHVlO1xuXG4gICAgICAgIHRoaXMuJGlucHV0ID0gdGhpcy4kZWwuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy4kaW5wdXRUZXh0ID0gdGhpcy4kaW5wdXQ7XG4gICAgICAgIHRoaXMudG1wSW5wdXRWYWwgPSAnJztcblxuICAgICAgICB0aGlzLnByZXBhcmVJbnB1dCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMuXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kaW5wdXRUZXh0Lm9uKCdrZXl1cCcsIHRoaXMub25DaGFuZ2VJbnB1dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy4kaW5wdXRUZXh0Lm9uKCdrZXl1cCcsIHRoaXMub25DaGFuZ2VJbnB1dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy53aW5kb3cub24oJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuJGRvY3VtZW50Lm9uKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHJlcGFyZUlucHV0KCkge1xuICAgICAgICAvLyBNYWtlIGNsb25lIGFuZCBjcmVhdGUgaW5wdXQgb2YgaGlkZGVuIHR5cGUuXG4gICAgICAgIHRoaXMuJGlucHV0SGlkZGVuID0gdGhpcy4kaW5wdXQuY2xvbmUoKTtcbiAgICAgICAgdGhpcy4kaW5wdXRIaWRkZW4uYXR0cigndHlwZScsICdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kaW5wdXRIaWRkZW4uaW5zZXJ0QWZ0ZXIodGhpcy4kaW5wdXRUZXh0KTtcblxuICAgICAgICAvLyBEZWZhdWx0IHZhbHVlcy4gVXN1YWxseSBieSBlZGl0IGZvcm0gd2hlbiBpZiBuZWNlc3NhcnkgdG8gbG9hZCBkYXRhIGFuZCBuZWVkIHRvIGRpc3BsYXllZCBpbiBpbnB1dC5cbiAgICAgICAgdGhpcy4kaW5wdXRUZXh0LnZhbCh0aGlzLiRpbnB1dC5kYXRhKCdhdXRvLWNvbXBsZXRlLXRleHQnKSk7XG4gICAgICAgIHRoaXMuJGlucHV0SGlkZGVuLnZhbCh0aGlzLiRpbnB1dC5kYXRhKCdhdXRvLWNvbXBsZXRlLXZhbHVlJykpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dFRleHQgPSB0aGlzLiRpbnB1dFRleHQuYXR0cignbmFtZScpO1xuICAgICAgICB0aGlzLiRpbnB1dFRleHQuYXR0cignbmFtZScsIGAke25hbWVJbnB1dFRleHR9X2F1dG9fY29tcGxldGVfdGV4dGApO1xuXG4gICAgICAgIHRoaXMuJGlucHV0VGV4dC5hdHRyKCdhdXRvY29tcGxldGUnLCAnbm9uZScpO1xuICAgICAgICB0aGlzLmNsYXNzUmVzdWx0cyA9ICdqcy1hdXRvLWNvbXBsZXRlLXJlc3VsdHMnO1xuICAgICAgICB0aGlzLmNsYXNzUmVzdWx0c0l0ZW0gPSAnanMtYXV0by1jb21wbGV0ZS1yZXN1bHRzLWl0ZW0nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgZGF0YSB2aWEgQVBJIHVybCBhZnRlciBjaGFuZ2VkIGlucHV0LlxuICAgICAqXG4gICAgICoge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNoYW5nZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIGxldCAkaW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIC8vIERldGVjdCBpZiB2YWx1ZSBjaGFuZ2VkLCB0aGVuIG5vdGhpbmcgaGFwcGVuLlxuICAgICAgICBpZiAodGhpcy50bXBJbnB1dFZhbCA9PT0gJGlucHV0LnZhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gJGlucHV0LnZhbCgpO1xuICAgICAgICB0aGlzLnRtcElucHV0VmFsID0gdGV4dDtcblxuICAgICAgICBsZXQgJHJlc3VsdHMgPSAkKGAuJHt0aGlzLmNsYXNzUmVzdWx0c31gKTtcblxuICAgICAgICBpZiAoJHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcmVzdWx0cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgxID49IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YVRvU2VuZCA9IHt0ZXh0OiB0ZXh0fTtcblxuICAgICAgICBpZiAoMCA8IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5kYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEVTNiB3aXRoIHNwcmVhZCBvcGVyYXRvci5cbiAgICAgICAgICAgIGRhdGFUb1NlbmQgPSB7Li4udGhpcy5vcHRpb25zLmRhdGEsIC4uLnt0ZXh0OiB0ZXh0fX07XG4gICAgICAgIH1cblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnMudXJsLFxuICAgICAgICAgICAgZGF0YTogZGF0YVRvU2VuZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMub3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICBlcnJvcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWVuYWJsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGRhdGFbdGhpcy5vcHRpb25zLmRhdGFOb2RlXTtcblxuICAgICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gZGF0YS5zdWNjZXNzIHx8IDAgPT09IG9iai5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZW5hYmxlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBkdXBsaWNhdGUgcmVzdWx0cyBsaXN0LlxuICAgICAgICAgICAgICAgICQoYC4ke3RoaXMuY2xhc3NSZXN1bHRzfWApLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBgPHVsIGNsYXNzPVwiYXV0by1jb21wbGV0ZS1pbnB1dC1yZXN1bHRzICR7dGhpcy5jbGFzc1Jlc3VsdHN9ICR7dGhpcy5vcHRpb25zLmNsYXNzRGl2UmVzdWx0c31cIj5gO1xuXG4gICAgICAgICAgICAgICAgJC5tYXAob2JqLCAodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyVGV4dCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICQubWFwKHRoaXMub3B0aW9ucy5kYXRhVGV4dCwgKGRhdGFUZXh0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyVGV4dFtpbmRleF0gPSB2YWxbZGF0YVRleHRdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGkgY2xhc3M9XCIke3RoaXMuY2xhc3NSZXN1bHRzSXRlbX1cIiBkYXRhLWpzb249JyR7SlNPTi5zdHJpbmdpZnkodmFsKX0nIGRhdGEtaXRlbS1pbmRleD0nJHtpbmRleH0nPiR7YXJyVGV4dC5qb2luKCcgJyl9PC9saT5gO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC91bD4nO1xuXG4gICAgICAgICAgICAgICAgJHJlc3VsdHMgPSAkKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgJHJlc3VsdHMuY3NzKCd3aWR0aCcsYCR7JGlucHV0Lm91dGVyV2lkdGgoKX1weGApO1xuICAgICAgICAgICAgICAgICRyZXN1bHRzLmluc2VydEFmdGVyKCRpbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAkcmVzdWx0cy5maW5kKGAuJHt0aGlzLmNsYXNzUmVzdWx0c0l0ZW19YCkub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrSXRlbUZyb21SZXN1bHRzLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIC8vIFJlc2l6ZSBhdXRvLWNvbXBsZXRlIHJlc3VsdHMuXG4gICAgICAgIGxldCAkcHJvcGVydHlDb3VudHJ5UmVzdWx0cyA9ICQoYC4ke3RoaXMuY2xhc3NSZXN1bHRzfWApO1xuXG4gICAgICAgIGlmICgkcHJvcGVydHlDb3VudHJ5UmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcm9wZXJ0eUNvdW50cnlSZXN1bHRzLmNzcygnd2lkdGgnLGAke3RoaXMuJGlucHV0VGV4dC5vdXRlcldpZHRoKCl9cHhgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBieSBjbGljayBvbiByZXN1bHQgbGlzdC5cbiAgICAgKlxuICAgICAqIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25DbGlja0l0ZW1Gcm9tUmVzdWx0cyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIHRoaXMuZ2V0VmFsdWVUb0lucHV0KCRpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmFsdWUgZnJvbSByZXN1bHRzIGxpc3QgYW5kIHB1dCBvbiBpbnB1dCBmaWVsZC5cbiAgICAgKlxuICAgICAqIHtPYmplY3R9ICRpdGVtXG4gICAgICovXG4gICAgZ2V0VmFsdWVUb0lucHV0KCRpdGVtKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAkaXRlbS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IG9iakRhdGEgPSAkaXRlbS5kYXRhKCdqc29uJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gb2JqRGF0YVt0aGlzLm9wdGlvbnMuZGF0YVZhbHVlXTtcblxuICAgICAgICAvLyBSZW1vdmUgcmVzdWx0cy5cbiAgICAgICAgJChgLiR7dGhpcy5jbGFzc1Jlc3VsdHN9YCkucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gU2V0IHZhbHVlcy5cbiAgICAgICAgdGhpcy50bXBJbnB1dFZhbCA9IHRleHQ7XG4gICAgICAgIHRoaXMuJGlucHV0VGV4dC52YWwodGV4dCk7XG4gICAgICAgIHRoaXMuJGlucHV0SGlkZGVuLnZhbChvYmpEYXRhW3RoaXMub3B0aW9ucy5kYXRhVmFsdWVdKTtcblxuICAgICAgICAvLyBTZXQgdmFsdWVzIHRvIGF0dHJpYnV0ZXMuXG4gICAgICAgIHRoaXMuJGlucHV0VGV4dC5hdHRyKCdkYXRhLWF1dG8tY29tcGxldGUtdGV4dCcsIHRleHQpO1xuICAgICAgICB0aGlzLiRpbnB1dFRleHQuYXR0cignZGF0YS1hdXRvLWNvbXBsZXRlLXZhbHVlJywgdmFsdWUpO1xuICAgICAgICB0aGlzLiRpbnB1dEhpZGRlbi5hdHRyKCdkYXRhLWF1dG8tY29tcGxldGUtdGV4dCcsIHRleHQpO1xuICAgICAgICB0aGlzLiRpbnB1dEhpZGRlbi5hdHRyKCdkYXRhLWF1dG8tY29tcGxldGUtdmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuJGlucHV0SGlkZGVuLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdGhpcy5vcHRpb25zLmF0dHIpIHtcbiAgICAgICAgICAgICQubWFwKHRoaXMub3B0aW9ucy5hdHRyLCAoYXR0ck5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBvYmpEYXRhW2F0dHJOYW1lXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGlucHV0VGV4dC5hdHRyKGBkYXRhLWF1dG8tY29tcGxldGUtJHthdHRyTmFtZX1gICwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRpbnB1dEhpZGRlbi5hdHRyKGBkYXRhLWF1dG8tY29tcGxldGUtJHthdHRyTmFtZX1gICwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRyZXN1bHRzID0gdGhpcy4kZWwuZmluZChgLiR7dGhpcy5jbGFzc1Jlc3VsdHN9YCk7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICRyZXN1bHRzLmZpbmQoJ2xpJyk7XG4gICAgICAgIGNvbnN0ICRpdGVtQWN0aXZlID0gJGl0ZW1zLmZpbHRlcihgLiR7Q0xBU1NFUy5JU19BQ1RJVkV9YCk7XG5cbiAgICAgICAgLy8gSWYgbm90IGFyZSBzaG93aW5nIHJlc3VsdHMsIHRoZW4gbm90aGluZyB3aWxsIGhhcHBlbi5cbiAgICAgICAgaWYgKDAgPT09ICRyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlkIHR5cCBvbiBhcnJvdyB1cC5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICBpZigwID09PSAkaXRlbUFjdGl2ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkaXRlbXMuZXEoJGl0ZW1zLmxlbmd0aCAtIDEpLmFkZENsYXNzKENMQVNTRVMuSVNfQUNUSVZFKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGl0ZW1BY3RpdmUucmVtb3ZlQ2xhc3MoQ0xBU1NFUy5JU19BQ1RJVkUpO1xuXG4gICAgICAgICAgICBjb25zdCAkcHJldkl0ZW0gPSAkaXRlbXMuZXEoJGl0ZW1BY3RpdmUuZGF0YSgnaXRlbS1pbmRleCcpIC0gMSk7XG5cbiAgICAgICAgICAgIGlmICgwIDwgJHByZXZJdGVtLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRwcmV2SXRlbS5hZGRDbGFzcyhDTEFTU0VTLklTX0FDVElWRSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlkIHR5cCBvbiBhcnJvdyBkb3duLlxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICBpZigwID09PSAkaXRlbUFjdGl2ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkaXRlbXMuZXEoMCkuYWRkQ2xhc3MoQ0xBU1NFUy5JU19BQ1RJVkUpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkaXRlbUFjdGl2ZS5yZW1vdmVDbGFzcyhDTEFTU0VTLklTX0FDVElWRSk7XG5cbiAgICAgICAgICAgIGNvbnN0ICRuZXh0SXRlbSA9ICRpdGVtcy5lcSgkaXRlbUFjdGl2ZS5kYXRhKCdpdGVtLWluZGV4JykgKyAxKTtcblxuICAgICAgICAgICAgaWYgKDAgPCAkbmV4dEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJG5leHRJdGVtLmFkZENsYXNzKENMQVNTRVMuSVNfQUNUSVZFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGl0ZW1zLmVxKDApLmFkZENsYXNzKENMQVNTRVMuSVNfQUNUSVZFKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBEaWQgdHlwIG9uIEVOVEVSIGFuZCBkZXRlY3QgYW4gYWN0aXZlIGl0ZW0gZnJvbSBsaXN0LlxuICAgICAgICB9IGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgMCA8ICRpdGVtQWN0aXZlLmxlbmd0aCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRWYWx1ZVRvSW5wdXQoJGl0ZW1BY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG53ZWIucmVnaXN0ZXJDb21wb25lbnQoJ2F1dG8tY29tcGxldGUnLCBBdXRvQ29tcGxldGUpO1xuIiwiaW1wb3J0IHdlYiBmcm9tICdAc3VsdS93ZWInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBIVE1MIGZyb20gXCIuLi9jb25zdGFudHMvaHRtbFwiO1xuY29uc3QgSEVJR0hUX0xPQURJTkdfSUNPTiA9ICcxLjVyZW0nO1xuXG4vKipcbiAqIEJ1dHRvbkxvYWRpbmcgY29tcG9uZW50LlxuICovXG5jbGFzcyBCdXR0b25Mb2FkaW5nIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAkZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmhlaWdodExvYWRpbmdJY29uXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgkZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZWwgPSAkKCRlbCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2J1dHRvbi1sb2FkaW5nJyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGVsLm9uKCdjbGljaycsIHRoaXMuc2hvd0xvYWRpbmcuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc2hvd0xvYWRpbmcoKSB7XG4gICAgICAgIGxldCBoZWlnaHRMb2FkaW5nSWNvbiA9IHRoaXMub3B0aW9ucy5oZWlnaHRMb2FkaW5nSWNvbiA/PyBIRUlHSFRfTE9BRElOR19JQ09OO1xuXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5qcy1idXR0b24tbG9hZGluZy1pY29uJykucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuJGVsLnByZXBlbmQoJChIVE1MLkxPQURJTkdfRFVBTF9SSU5HX1dISVRFKS5hZGRDbGFzcygnanMtYnV0dG9uLWxvYWRpbmctaWNvbiBtci0yJykuYXR0cih7J3N0eWxlJzogYGhlaWdodDoke2hlaWdodExvYWRpbmdJY29ufTtgfSkpO1xuXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5qcy1idXR0b24tbG9hZGluZy0tcmVtb3ZpbmcnKS5oaWRlKCk7XG4gICAgfVxufVxuXG53ZWIucmVnaXN0ZXJDb21wb25lbnQoJ2J1dHRvbi1sb2FkaW5nJywgQnV0dG9uTG9hZGluZyk7XG4iLCJpbXBvcnQgd2ViIGZyb20gJ0BzdWx1L3dlYic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGRhdGVwaWNrZXJGYWN0b3J5IGZyb20gJ2pxdWVyeS1kYXRlcGlja2VyJztcbmltcG9ydCBkYXRlcGlja2VyTG9jYWxlIGZyb20gJy4uL2NvbnN0YW50cy9sb2NhbGUtZGF0ZXBpY2tlcic7XG5cbi8qKlxuICogRGF0ZXBpY2tlciBjb21wb25lbnQuXG4gKi9cbmNsYXNzIERhdGVwaWNrZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICRlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNoYW5nZU1vbnRoXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNoYW5nZVllYXJcbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCRlbCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLiRlbCA9ICQoJGVsKTtcbiAgICAgICAgdGhpcy4kZGF0ZXBpY2tlciA9IHRoaXMuJGVsLmZpbmQoJy5qcy1kYXRlcGlja2VyJyk7XG4gICAgICAgIHRoaXMuJHVpRGF0ZXBpY2tlciA9ICQoJ2Rpdi51aS1kYXRlcGlja2VyJyk7XG5cbiAgICAgICAgdGhpcy5pbml0Rm9ybURhdGVwaWNrZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHVpRGF0ZXBpY2tlci5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tEYXRlcGlja2VyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgZGF0ZXBpY2tlci5cbiAgICAgKi9cbiAgICBpbml0Rm9ybURhdGVwaWNrZXIoKSB7XG4gICAgICAgIGRhdGVwaWNrZXJGYWN0b3J5KCQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9jYWxlKSB7XG4gICAgICAgICAgICBkYXRlcGlja2VyTG9jYWxlW3RoaXMub3B0aW9ucy5sb2NhbGVdLmZhY3RvcnkoJCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRkYXRlcGlja2VyLmRhdGVwaWNrZXIoe1xuICAgICAgICAgICAgY2hhbmdlTW9udGg6IHRoaXMub3B0aW9ucy5jaGFuZ2VNb250aCA/PyBmYWxzZSxcbiAgICAgICAgICAgIGNoYW5nZVllYXI6IHRoaXMub3B0aW9ucy5jaGFuZ2VZZWFyID8/IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjbGljayBvbiBjYWxlbmRhciB3aWxsIHNldCBzYW1lIHdpZHRoIGZyb20gaW5wdXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNsaWNrRGF0ZXBpY2tlcihldmVudCkge1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLm91dGVyV2lkdGgodGhpcy4kZGF0ZXBpY2tlci5vdXRlcldpZHRoKCkpO1xuICAgIH1cbn1cblxud2ViLnJlZ2lzdGVyQ29tcG9uZW50KCdkYXRlcGlja2VyJywgRGF0ZXBpY2tlcik7XG4iLCJpbXBvcnQgd2ViIGZyb20gJ0BzdWx1L3dlYic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFBob25lTnVtYmVyIGNvbXBvbmVudC5cbiAqL1xuY2xhc3MgUGhvbmVOdW1iZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICRlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubG9jYWxlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMudHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmNob29zZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy51c2FnZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5tYWluXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLnNlbGVjdENvdW50cnlDYWxsaW5nQ29kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmNvdW50cnlDYWxsaW5nQ29kZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy52YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmxvY2F0aW9uQ291bnRyeUlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMucHJlZml4RW50aXR5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubGFiZWxcbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCRlbCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRlbCA9ICQoJGVsKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLmNvdW50cnlDYWxsaW5nQ29kZXMgPSBKU09OLnBhcnNlKHRoaXMub3B0aW9ucy5jb3VudHJ5Q2FsbGluZ0NvZGVzKTtcblxuICAgICAgICB0aGlzLmNsYXNzRHJvcGRvd25Db3VudHJ5Q2FsbGluZ0NvZGUgPSAnanMtcGhvbmUtbnVtYmVyLWRyb3Bkb3duLWNhbGxpbmctY29kZSc7XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5UGhvbmVOdW1iZXJJbnB1dCgpO1xuICAgICAgICB0aGlzLnNldENhbGxpbmdDb2RlT25Ecm9wZG93bigpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmdldERyb3Bkb3duQ291bnRyeUNhbGxpbmdDb2RlKCkub24oJ2NsaWNrJywgdGhpcy5vblVwZGF0ZUNvdW50cnlDYWxsaW5nQ29kZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBnZXREcm9wZG93bkNvdW50cnlDYWxsaW5nQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLmZpbmQoYC4ke3RoaXMuY2xhc3NEcm9wZG93bkNvdW50cnlDYWxsaW5nQ29kZX1gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblVwZGF0ZUNvdW50cnlDYWxsaW5nQ29kZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRjb3VudHJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLiRlbC5maW5kKCcuanMtcGhvbmUtbnVtYmVyLWJ1dHRvbi1jYWxsaW5nLWNvZGUnKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFtkYXRhLWluZGV4PVwiJHskY291bnRyeS5kYXRhKCdpbmRleCcpfVwiXWApXG4gICAgICAgICAgICAgICAgLmh0bWwodGhpcy5nZXRIVE1MQ291bnRyeUFuZENhbGxpbmdDb2RlKCRjb3VudHJ5LmRhdGEoJ2FscGhhMicpLCAkY291bnRyeS5kYXRhKCdjYWxsaW5nLWNvZGUnKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RpdGxlJywgJGNvdW50cnkuZGF0YSgnbmFtZScpKTtcblxuICAgICAgICB0aGlzLiRlbC5maW5kKCdbbmFtZT1cIicrIHRoaXMub3B0aW9ucy5wcmVmaXhFbnRpdHkgKydbcGhvbmVfbnVtYmVyX2NvdW50cnlfaWRdXCJdJykudmFsKCRjb3VudHJ5LmRhdGEoJ2lkJykpO1xuICAgIH1cblxuICAgIGdldEhUTUxDb3VudHJ5QW5kQ2FsbGluZ0NvZGUoYWxwaGEyLCBjYWxsaW5nQ29kZSkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRIVE1MQ291bnRyeUZsYWcoYWxwaGEyID8/ICcnKX0gPHNwYW4gY2xhc3M9XCJ0ZXh0LWJsYWNrLTUwXCI+JHtjYWxsaW5nQ29kZSA/PyAnJ30gPC9zcGFuPmA7XG4gICAgfVxuXG4gICAgZ2V0SFRNTENvdW50cnlGbGFnKGFscGhhMikge1xuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiZmkgZmktJHthbHBoYTIudG9Mb3dlckNhc2UoKX1cIj48L3NwYW4+YDtcbiAgICB9XG5cbiAgICBkaXNwbGF5UGhvbmVOdW1iZXJJbnB1dCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZsYWdzID0ge307XG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5Q2FsbGluZ0NvZGVzID0gdGhpcy5jb3VudHJ5Q2FsbGluZ0NvZGVzLnJlZHVjZSgoaHRtbCwgY291bnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGZsYWdzW2NvdW50cnkuaWRdID0gY291bnRyeS5hbHBoYTIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbCArPSBgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtICR7dGhpcy5jbGFzc0Ryb3Bkb3duQ291bnRyeUNhbGxpbmdDb2RlfVwiIGhyZWY9XCIjXCIgZGF0YS1uYW1lPVwiJHtjb3VudHJ5Lm5hbWV9XCIgZGF0YS1jYWxsaW5nLWNvZGU9XCIke2NvdW50cnkuY2FsbGluZ0NvZGV9XCIgZGF0YS1hbHBoYTI9XCIke2NvdW50cnkuYWxwaGEyLnRvTG93ZXJDYXNlKCl9XCIgZGF0YS1pZD1cIiR7Y291bnRyeS5pZH1cIiBkYXRhLWluZGV4PVwiMFwiPiR7dGhpcy5nZXRIVE1MQ291bnRyeUZsYWcoY291bnRyeS5hbHBoYTIpfSA8c3BhbiBjbGFzcz1cIm1sLTFcIj4ke2NvdW50cnkubmFtZX08L3NwYW4+IDxzcGFuIGNsYXNzPVwidGV4dC1ibGFjay01MFwiPiR7Y291bnRyeS5jYWxsaW5nQ29kZSA/PyAnJ308L3NwYW4+PC9hPmA7XG4gICAgICAgICAgICB9LCAnJyk7XG5cbiAgICAgICAgICAgIGxldCBpbnB1dCA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xuICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwicGhvbmVfbnVtYmVyXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIHJlcXVpcmVkXCI+JyArIHRoaXMub3B0aW9ucy50cmFuc2xhdGlvbnMubGFiZWwgKyAnPC9sYWJlbD4gJyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPicgK1xuICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGUgZm9ybV9fZHJvcGRvd24tdG9nZ2xlLWNvdW50cnktY29kZXMganMtcGhvbmUtbnVtYmVyLWJ1dHRvbi1jYWxsaW5nLWNvZGVcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiJyArXG4gICAgICAgICAgICAgICAgJ2FyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgZGF0YS1pbmRleD1cIjBcIiB0aXRsZT1cIicgKyB0aGlzLm9wdGlvbnMudHJhbnNsYXRpb25zLnNlbGVjdENvdW50cnlDYWxsaW5nQ29kZSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYXMgZmEtZ2xvYmUgdGV4dC1ibGFjay01MFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nICtcbiAgICAgICAgICAgICAgICAnPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGZvcm1fX2Ryb3Bkb3duLW1lbnUtY291bnRyeS1jb2Rlc1wiPicgK1xuICAgICAgICAgICAgICAgIGNvdW50cnlDYWxsaW5nQ29kZXMgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicrIHRoaXMub3B0aW9ucy5wcmVmaXhFbnRpdHkgKydbcGhvbmVfbnVtYmVyX2NvdW50cnlfaWRdXCIgdmFsdWU9XCInKyB0aGlzLm9wdGlvbnMubG9jYXRpb25Db3VudHJ5SWQgKyAnXCI+JytcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZV9udW1iZXJcIiBuYW1lPVwiJysgdGhpcy5vcHRpb25zLnByZWZpeEVudGl0eSArJ1twaG9uZV9udW1iZXJdXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIicrIHRoaXMub3B0aW9ucy52YWx1ZSArICdcIj4nK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+JztcblxuICAgICAgICB0aGlzLiRlbC5odG1sKGlucHV0KTtcbiAgICB9XG5cbiAgICBzZXRDYWxsaW5nQ29kZU9uRHJvcGRvd24oKSB7XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmNvdW50cnlDYWxsaW5nQ29kZXMuZmluZCgoY291bnRyeSkgPT4gY291bnRyeS5pZCA9PT0gdGhpcy5vcHRpb25zLmxvY2F0aW9uQ291bnRyeUlkKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb3VudHJ5KXtcbiAgICAgICAgICAgIHRoaXMuJGVsLmZpbmQoJy5qcy1waG9uZS1udW1iZXItYnV0dG9uLWNhbGxpbmctY29kZScpXG4gICAgICAgICAgICAgICAgLmh0bWwodGhpcy5nZXRIVE1MQ291bnRyeUFuZENhbGxpbmdDb2RlKGNvdW50cnkuYWxwaGEyLCBjb3VudHJ5LmNhbGxpbmdDb2RlKSlcbiAgICAgICAgICAgICAgICAuYXR0cigndGl0bGUnLCBjb3VudHJ5Lm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG53ZWIucmVnaXN0ZXJDb21wb25lbnQoJ3Bob25lLW51bWJlcicsIFBob25lTnVtYmVyKTtcbiIsIi8qKlxuICogVGhpcyBjb25zdGFudCBmaWxlIGNvbnRhaW5zIGNsYXNzIG5hbWVzIHRoYXQgYXJlIHVzZWQgYWNyb3NzIG11bHRpcGxlIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBJU19BQ1RJVkU6ICdpcy1hY3RpdmUnLFxuICAgIElTX0xPQURJTkc6ICdpcy1sb2FkaW5nJyxcbiAgICBJU19WSVNJQkxFOiAnaXMtdmlzaWJsZScsXG59O1xuIiwiLyoqXG4gKiBUaGlzIGNvbnN0YW50IGZpbGUgY29udGFpbnMgSFRNTCBzdHJpbmdzIHRoYXQgYXJlIHVzZWQgYWNyb3NzIG11bHRpcGxlIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBUSFJFRV9ET1RTX0FOSU06ICc8c3BhbiBjbGFzcz1cInRocmVlLWRvdHNfX2RvdDFcIj4uPC9zcGFuPjxzcGFuIGNsYXNzPVwidGhyZWUtZG90c19fZG90MlwiPi48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aHJlZS1kb3RzX19kb3QzXCI+Ljwvc3Bhbj4nLFxuICAgIExPQURJTkdfRFVBTF9SSU5HX1dISVRFOiAnPGltZyBzcmM9XCIvaW1nL2xvYWRlcnMvZHVhbC1yaW5nLXdoaXRlLnN2Z1wiIGFsdD1cIlwiLz4nLFxufTtcbiIsIi8vIExvYWQgYWxsIG5lY2Vzc2FyeSBsYW5ndWFnZXMgZnJvbSBkYXRlcGlja2VyIGxpYnJhcnkuXG5pbXBvcnQgZGF0ZXBpY2tlckRFRmFjdG9yeSBmcm9tICdqcXVlcnktZGF0ZXBpY2tlci9pMThuL2pxdWVyeS51aS5kYXRlcGlja2VyLWRlJztcbmltcG9ydCBkYXRlcGlja2VyRU5GYWN0b3J5IGZyb20gJ2pxdWVyeS1kYXRlcGlja2VyL2kxOG4vanF1ZXJ5LnVpLmRhdGVwaWNrZXItZW4tR0InO1xuaW1wb3J0IGRhdGVwaWNrZXJQVEZhY3RvcnkgZnJvbSAnanF1ZXJ5LWRhdGVwaWNrZXIvaTE4bi9qcXVlcnkudWkuZGF0ZXBpY2tlci1wdC1CUic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAnZW4nOiB7XG4gICAgICAgIGZhY3Rvcnk6IGRhdGVwaWNrZXJFTkZhY3RvcnksXG4gICAgfSxcbiAgICAnZGUnOiB7XG4gICAgICAgIGZhY3Rvcnk6IGRhdGVwaWNrZXJERUZhY3RvcnksXG4gICAgfSxcbiAgICAncHQnOiB7XG4gICAgICAgIGZhY3Rvcnk6IGRhdGVwaWNrZXJQVEZhY3RvcnksXG4gICAgfSxcbn07XG4iLCIvKipcbiAqIFRoaXMgY29uc3RhbnQgZmlsZSBjb250YWlucyBjbGFzcyBuYW1lcyB0aGF0IGFyZSB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTE9DQVRJT05fU1RBVEVTOiAnL2FwaS9sb2NhdGlvbi9zdGF0ZXMnLFxuICAgIExPQ0FUSU9OX0NJVElFUzogJy9hcGkvbG9jYXRpb24vY2l0aWVzJyxcbiAgICBMT0NBVElPTl9ORUlHSEJPUkhPT0Q6ICcvYXBpL2xvY2F0aW9uL25laWdoYm9yaG9vZHMnLFxuICAgIFBST1BFUlRZX1BIT1RPX1VQTE9BRDogJy9hcGkvcHJvcGVydHktcGhvdG8vdXBsb2FkJyxcbiAgICBQUk9QRVJUWV9QSE9UT19ERUxFVEU6ICcvYXBpL3Byb3BlcnR5LXBob3RvL2RlbGV0ZScsXG4gICAgUFJPUEVSVFlfUEhPVE9fU09SVDogJy9hcGkvcHJvcGVydHktcGhvdG8vc29ydCcsXG4gICAgQ1VTVE9NX0ZJRUxEUzogJy9hcGkvY3VzdG9tLWZpZWxkcycsXG59O1xuIiwiLyoqXG4gKiBUaGlzIGNvbnN0YW50IGZpbGUgY29udGFpbnMgdHJhbnNsYXRpb25zIGF2YWlsYWJsZSBmb3IgYWxsIEpTIHNjcmlwdHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAnZW4tVVMnOiB7XG4gICAgICAgIGRvbmU6ICdEb25lJyxcbiAgICAgICAgbm90Rm91bmQ6ICdOb3QgRm91bmQnLFxuICAgICAgICBub3RGb3VuZExvY2F0aW9uQnlQb3N0YWxDb2RlOiAnVW5mb3J0dW5hdGVseSB3ZSBjYW5cXCd0IGZpbmQgdGhlIGxvY2F0aW9uIGJ5IHppcCBjb2RlLicsXG4gICAgICAgIG5vdEZvdW5kTG9jYXRpb25Pbkdvb2dsZU1hcHM6ICdVbmZvcnR1bmF0ZWx5IHdlIGNhblxcJ3QgZmluZCB0aGUgbG9jYXRpb24gb24gZ29vZ2xlIG1hcHMuJyxcbiAgICAgICAgbG9hZGluZzogJ0xvYWRpbmcnLFxuICAgICAgICBsb2NhdGlvbkdvb2dsZU1hcHNGb3VuZFN1Y2Nlc3NmdWxseTogJ1llYWFoISEhIFRoZSBsb2NhdGlvbiBvbiBnb29nbGUgbWFwcyB3YXMgZm91bmQgc3VjY2Vzc2Z1bGx5IScsXG4gICAgICAgIGxvY2F0aW9uRm91bmRTdWNjZXNzZnVsbHk6ICdZZWFhaCEhISBUaGUgbG9jYXRpb24gd2FzIGZvdW5kIHN1Y2Nlc3NmdWxseSEnLFxuICAgICAgICBzZWFyY2hMb2NhdGlvbkJ5UG9zdGFsQ29kZTogJ1NlYXJjaCB0aGUgbG9jYXRpb24gYnkgcG9zdGFsIGNvZGUuJyxcbiAgICAgICAgc2VhcmNoTG9jYXRpb25Pbkdvb2dsZU1hcHM6ICdTZWFyY2ggdGhlIGxvY2F0aW9uIG9uIGdvb2dsZSBtYXBzLicsXG4gICAgICAgIHNlbGVjdFBob3RvczogJ1NlbGVjdCBwaG90b3MnLFxuICAgIH0sXG4gICAgJ2RlLURFJzoge1xuICAgICAgICBkb25lOiAnRmVydGlnJyxcbiAgICAgICAgbm90Rm91bmQ6ICdOaWNodCBHZWZ1bmRlbicsXG4gICAgICAgIG5vdEZvdW5kTG9jYXRpb25CeVBvc3RhbENvZGU6ICdMZWlkZXIga8O2bm5lbiB3aXIgZGVuIE9ydCBuaWNodCDDvGJlciBkaWUgUG9zdGxlaXR6YWhsIGZpbmRlbi4nLFxuICAgICAgICBub3RGb3VuZExvY2F0aW9uT25Hb29nbGVNYXBzOiAnTGVpZGVyIGvDtm5uZW4gd2lyIGRlbiBPcnQgbmljaHQgw7xiZXIgaW0gR29vZ2xlIE1hcHMgZmluZGVuLicsXG4gICAgICAgIGxvYWRpbmc6ICdMYWRlbicsXG4gICAgICAgIGxvY2F0aW9uR29vZ2xlTWFwc0ZvdW5kU3VjY2Vzc2Z1bGx5OiAnVWh1dXUhISEgRGVyIFN0YW5kb3J0IGltIEdvb2dsZSBNYXBzIHd1cmRlIGVyZm9sZ3JlaWNoIGdlZnVuZGVuIScsXG4gICAgICAgIGxvY2F0aW9uRm91bmRTdWNjZXNzZnVsbHk6ICdVaHV1dSEhISBEZXIgU3RhbmRvcnQgd3VyZGUgZXJmb2xncmVpY2ggZ2VmdW5kZW4hJyxcbiAgICAgICAgc2VhcmNoTG9jYXRpb25CeVBvc3RhbENvZGU6ICdEZW4gT3J0IHdpcmQgZHVyY2ggZGVuIFBvc3RsZWl0emFobCBnZXN1Y2h0LicsXG4gICAgICAgIHNlYXJjaExvY2F0aW9uT25Hb29nbGVNYXBzOiAnRGVuIE9ydCB3aXJkIGltIEdvb2dsZSBNYXBzIGdlc3VjaHQuJyxcbiAgICAgICAgc2VsZWN0UGhvdG9zOiAnRm90b3MgYXVzd8OkaGxlbidcbiAgICB9LFxuICAgICdwdC1CUic6IHtcbiAgICAgICAgZG9uZTogJ0ZlaXRvJyxcbiAgICAgICAgbm90Rm91bmQ6ICdOw6NvIGVuY29udHJhbW9zJyxcbiAgICAgICAgbm90Rm91bmRMb2NhdGlvbkJ5UG9zdGFsQ29kZTogJ0luZmVsaXptZW50ZSBuw6NvIGFjaGFtb3MgYSBsb2NhbGl6YcOnw6NvIHBlbG8gQ0VQLicsXG4gICAgICAgIG5vdEZvdW5kTG9jYXRpb25Pbkdvb2dsZU1hcHM6ICdJbmZlbGl6bWVudGUgbsOjbyBhY2hhbW9zIGEgbG9jYWxpemHDp8OjbyBubyBnb29nbGUgbWFwcy4nLFxuICAgICAgICBsb2FkaW5nOiAnQ2FycmVnYW5kbycsXG4gICAgICAgIGxvY2F0aW9uR29vZ2xlTWFwc0ZvdW5kU3VjY2Vzc2Z1bGx5OiAnWWVhYWghISEgQSBsb2NhbGl6YcOnw6NvIG5vIGdvb2dsZSBtYXBzIGZvaSBlbmNvbnRyYWRhIGNvbSBzdWNlc3NvIScsXG4gICAgICAgIGxvY2F0aW9uRm91bmRTdWNjZXNzZnVsbHk6ICdZZWFhaCEhISBBIGxvY2FsaXphw6fDo28gZm9pIGVuY29udHJhZGEgY29tIHN1Y2Vzc28hJyxcbiAgICAgICAgc2VhcmNoTG9jYXRpb25CeVBvc3RhbENvZGU6ICdCdXNjYW5kbyBhIGxvY2FsaXphw6fDo28gcGVsbyBDRVAuJyxcbiAgICAgICAgc2VhcmNoTG9jYXRpb25Pbkdvb2dsZU1hcHM6ICdCdXNjYW5kbyBhIGxvY2FsaXphw6fDo28gbm8gZ29vZ2xlIG1hcHMuJyxcbiAgICAgICAgc2VsZWN0UGhvdG9zOiAnU2VsZWNpb25hciBmb3RvcydcbiAgICB9XG59O1xuIiwiLy8gQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAobWFpbi5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvbWFpbi5zY3NzJztcblxuLy8gUGx1Z2luc1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC9hc3NpZ24nO1xuaW1wb3J0ICdhZG1pbi1sdGUvcGx1Z2lucy9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90b2FzdCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnO1xuaW1wb3J0ICdhZG1pbi1sdGUvZGlzdC9qcy9hZG1pbmx0ZS5taW4nO1xuaW1wb3J0IHdlYiBmcm9tICdAc3VsdS93ZWInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRyZXNzLWluZm9ybWF0aW9uJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGF0ZXBpY2tlcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9waG9uZS1udW1iZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYnV0dG9uLWxvYWRpbmcnO1xuXG4vLyBJbXBvcnQgU2VydmljZXMgaGVyZS5cbmltcG9ydCAnLi9zZXJ2aWNlcy90b2FzdCc7XG5pbXBvcnQgJy4vc2VydmljZXMvdHJhbnNsYXRlJztcblxuLy8gTWFpbiBzY3JpcHRzIHRvIGV4ZWN1dGUuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xud2luZG93LndlYiA9IHdlYjtcblxuLy8gRW5hYmxlIHRvb2x0aXAgZnJvbSBib290c3RyYXAuXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpOyIsImltcG9ydCB3ZWIgZnJvbSAnQHN1bHUvd2ViJztcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBkaXNwbGF5IHRvYXN0LlxuICogRG9jdW1lbnRhdGlvbiBvZiBUb2FzdCBCb290c3RyYXAgaGVyZTogaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4zL2NvbXBvbmVudHMvdG9hc3RzL1xuICovXG53ZWIucmVnaXN0ZXJTZXJ2aWNlKCd0b2FzdCcsIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdG9hc3QgcG9wdXAuXG4gICAgICogQHBhcmFtIGJvZHkgQ29udGVudCBvZiB0b2FzdCBwb3B1cC5cbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gRGVmaW5lIHBvc2l0aW9uIG9mIHRvYXN0IHBvcHVwIHdpdGggXCJ0b3AtY2VudGVyXCIgb3IgXCJib3R0b20tcmlnaHRcIiAoZGVmYXVsdCkuXG4gICAgICogQHBhcmFtIHRoZW1lQ29sb3IgRGVmaW5lIHRoZSB0aGVtZSBjb2xvci4gQXZhaWxhYmxlOiBcImJsYWNrXCIuXG4gICAgICogQHJldHVybiB7KnxqUXVlcnl9XG4gICAgICovXG4gICAgc2hvdyh0aXRsZSwgYm9keSwgcG9zaXRpb24gPSAnYm90dG9tLXJpZ2h0JywgdGhlbWVDb2xvciA9ICcnKSB7XG4gICAgICAgIGNvbnN0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICAgICAgICBjb25zdCAkb2xkVG9hc3QgPSAkZG9jdW1lbnQuZmluZCgnLmpzLXRvYXN0Jyk7XG4gICAgICAgIGxldCBhZGRpdGlvbmFsQ2xhc3MgPSAnJztcblxuICAgICAgICBpZiAoMCA8ICRvbGRUb2FzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICRvbGRUb2FzdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZGl0aW9uYWxDbGFzcyA9IHRoZW1lQ29sb3IgPyBgIHRvYXN0LSR7dGhlbWVDb2xvcn1gOicnO1xuXG4gICAgICAgIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cInRvYXN0JyArIGFkZGl0aW9uYWxDbGFzcyArICcgLS0nICsgcG9zaXRpb24gKyAnIGpzLXRvYXN0XCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgZGF0YS1hdXRvaGlkZT1cImZhbHNlXCI+JyArXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+JyArXG4gICAgICAgICAgICAnICAgIDxzdHJvbmcgY2xhc3M9XCJtci1hdXRvIGpzLXRvYXN0LXRpdGxlXCI+JyArIHRpdGxlICsgJzwvc3Ryb25nPicgK1xuICAgICAgICAgICAgJyAgICA8c21hbGwgY2xhc3M9XCJqcy10b2FzdC10aXRsZS1zbWFsbFwiPjwvc21hbGw+JyArXG4gICAgICAgICAgICAnICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWwtMiBtYi0xIGNsb3NlIGpzLXRvYXN0LWNsb3NlXCIgZGF0YS1kaXNtaXNzPVwidG9hc3RcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4nICtcbiAgICAgICAgICAgICcgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xuICAgICAgICAgICAgJyAgICA8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICcgIDwvZGl2PicgK1xuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cInRvYXN0LWJvZHkganMtdG9hc3QtYm9keVwiPicgKyBib2R5ICsgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PidcblxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGh0bWwpO1xuXG4gICAgICAgIGNvbnN0ICRuZXdUb2FzdCA9ICQoZG9jdW1lbnQpLmZpbmQoJy5qcy10b2FzdCcpO1xuICAgICAgICAkbmV3VG9hc3QudG9hc3QoJ3Nob3cnKTtcblxuICAgICAgICByZXR1cm4gJG5ld1RvYXN0O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFRSQU5TTEFUSU9OUyBmcm9tIFwiLi4vY29uc3RhbnRzL3RyYW5zbGF0aW9uc1wiO1xuXG53ZWIucmVnaXN0ZXJTZXJ2aWNlKCd0cmFuc2xhdGUnLCB7XG4gICAgbG9jYWxlOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVHJhbnNsYXRlIHN0cmluZyBrZXkuXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRleHQgKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVFJBTlNMQVRJT05TW3RoaXMubG9jYWxlXVtrZXldID8/ICcnO1xuICAgIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndlYiIsIiQiLCJDTEFTU0VTIiwiUk9VVEVTIiwiSFRNTCIsIkFkZHJlc3NJbmZvcm1hdGlvbiIsIiRlbCIsIm9wdGlvbnMiLCIkYm9keSIsIm1hcmtlciIsImdvb2dsZVJlc3VsdHMiLCJjbGFzc0NvdW50cnkiLCIkbWFwIiwiZmluZCIsIiRtYXBEaXNwbGF5IiwiJHVwZGF0ZU1hcCIsIiRsYXRJbnB1dCIsIiRsbmdJbnB1dCIsIiRhZGRyZXNzSW5wdXQiLCIkc3RyZWV0TnVtYmVySW5wdXQiLCIkcG9zdGFsQ29kZUlucHV0IiwiJGNvdW50cnlJbnB1dCIsIiRzdGF0ZUlucHV0IiwiJGNpdHlJbnB1dCIsIiRuZWlnaGJvcmhvb2RJbnB1dCIsIiRjb21wbGVtZW50SW5wdXQiLCIkcG9zdGFsQ29kZUJ1dHRvbiIsIiRmb3JtYXR0ZWRBZGRyZXNzSW5wdXQiLCIkYnRuUG9zdGFsQ29kZUxvYWRlciIsIiRidG5Hb29nbGVNYXBzTG9hZGVyIiwidG9hc3QiLCJnZXRTZXJ2aWNlIiwidHJhbnNsYXRlIiwibG9hZEdvb2dsZU1hcCIsImJpbmRFdmVudHMiLCJvbiIsIm9uVXBkYXRlR29vZ2xlTWFwIiwiYmluZCIsInNlYXJjaExvY2F0aW9uRnJvbVBvc3RhbENvZGUiLCJvbkNoYW5nZVN0YXRlSW5wdXQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJhcGlLZXkiLCJ3aW5kb3ciLCJvbk1hcExvYWRlZCIsImluaXRHb29nbGVNYXAiLCJ0eXBlIiwic3JjIiwibG9jYWxlIiwiYXBwZW5kIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImdldCIsInN0cmVldFZpZXdDb250cm9sIiwiZnVsbHNjcmVlbkNvbnRyb2wiLCJ6b29tQ29udHJvbE9wdGlvbnMiLCJwb3NpdGlvbiIsIkNvbnRyb2xQb3NpdGlvbiIsIlJJR0hUX1RPUCIsImxhdCIsInZhbCIsImxuZyIsInNldE1hcmtlck9uR29vZ2xlTWFwcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiYWRkQ2xhc3MiLCJJU19MT0FESU5HIiwic2V0TWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwibGF0bG5nIiwiTGF0TG5nIiwiTWFya2VyIiwiZHJhZ2dhYmxlIiwiYWRkTGlzdGVuZXIiLCJvbkRyYWdlbmRNYXJrZXIiLCJleHRlbmQiLCJmaXRCb3VuZHMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJzZXRab29tIiwiZXZlbnQiLCJsYXRMbmciLCJ1cGRhdGVDb29yZGluYXRlc0ZpZWxkcyIsInNob3dNZXNzYWdlTG9hZGluZ0dvb2dsZU1hcHMiLCJwYXJhbSIsInJlc3RyaWN0aW9ucyIsImFyckxvY2F0aW9uIiwiY291bnRyeUFscGhhMiIsImF0dHIiLCJzdGF0ZSIsImNpdHkiLCJuZWlnaGJvcmhvb2QiLCJwb3N0YWxDb2RlIiwiYWRkcmVzcyIsInN0cmVldE51bWJlciIsImNvbXBsZW1lbnQiLCJjb3VudHJ5IiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwicHVzaCIsInN0cmVldCIsImpvaW4iLCJnZW9jb2RlciIsIkdlb2NvZGVyIiwiZ2VvY29kZSIsInJlc3VsdHMiLCJzdGF0dXMiLCJmb3JtYXR0ZWRBZGRyZXNzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibWVzc2FnZUxvY2F0aW9uTG9hZGVkR29vZ2xlTWFwcyIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uR29vZ2xlTWFwcyIsInNob3dNZXNzYWdlTG9hZGluZ0xvY2F0aW9uQnlQb3N0YWxDb2RlIiwiY291bnRyeUlkIiwiYWxlcnQiLCJlbXB0eVN1YkZpZWxkcyIsImxvYWRMb2NhdGlvbkRyb3Bkb3ducyIsIm1lc3NhZ2VOb3RGb3VuZExvY2F0aW9uQnlQb3N0YWxDb2RlIiwidW5kZWZpbmVkIiwiYWRkcmVzc19jb21wb25lbnRzIiwiaW5BcnJheSIsInR5cGVzIiwibG9uZ19uYW1lIiwidXBkYXRlRHJvcGRvd25TdGF0ZXMiLCJlbXB0eURyb3Bkb3duIiwiYWpheCIsInVybCIsIkxPQ0FUSU9OX1NUQVRFUyIsImRhdGEiLCJ0b2tlbiIsImFwaVRva2VuIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwic3RhdGVzIiwibGVuZ3RoIiwibWVzc2FnZSIsInZhbHVlIiwiaWQiLCJ0ZXh0IiwibmFtZSIsInVwZGF0ZURyb3Bkb3duQ2l0aWVzIiwic3RhdGVJZCIsIkxPQ0FUSU9OX0NJVElFUyIsImNpdGllcyIsIm1lc3NhZ2VMb2NhdGlvbkxvYWRlZEJ5UG9zdGFsQ29kZSIsImN1cnJlbnRUYXJnZXQiLCIkc2VsZWN0IiwiJG9wdGlvbnMiLCJvcHRpb24iLCIkb3B0aW9uIiwicmVtb3ZlIiwiSVNfVklTSUJMRSIsImN1cnJlbnRUb2FzdCIsInNob3ciLCJUSFJFRV9ET1RTX0FOSU0iLCJ0b29sdGlwIiwiaHRtbCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiQXV0b0NvbXBsZXRlIiwiJGRvY3VtZW50IiwiZGF0YU5vZGUiLCJkYXRhVGV4dCIsImRhdGFWYWx1ZSIsIiRpbnB1dCIsIiRpbnB1dFRleHQiLCJ0bXBJbnB1dFZhbCIsInByZXBhcmVJbnB1dCIsIm9uQ2hhbmdlSW5wdXQiLCJvblJlc2l6ZSIsIm9uS2V5ZG93biIsIiRpbnB1dEhpZGRlbiIsImNsb25lIiwiaW5zZXJ0QWZ0ZXIiLCJuYW1lSW5wdXRUZXh0IiwiY2xhc3NSZXN1bHRzIiwiY2xhc3NSZXN1bHRzSXRlbSIsIiRyZXN1bHRzIiwiZGF0YVRvU2VuZCIsIk9iamVjdCIsImtleXMiLCJtZXRob2QiLCJvYmoiLCJjbGFzc0RpdlJlc3VsdHMiLCJpbmRleCIsImFyclRleHQiLCJKU09OIiwic3RyaW5naWZ5IiwiY3NzIiwib3V0ZXJXaWR0aCIsIm9uQ2xpY2tJdGVtRnJvbVJlc3VsdHMiLCIkcHJvcGVydHlDb3VudHJ5UmVzdWx0cyIsIiRpdGVtIiwiZ2V0VmFsdWVUb0lucHV0Iiwib2JqRGF0YSIsInRyaWdnZXIiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsIiRpdGVtcyIsIiRpdGVtQWN0aXZlIiwiZmlsdGVyIiwiSVNfQUNUSVZFIiwia2V5Q29kZSIsImVxIiwiJHByZXZJdGVtIiwiJG5leHRJdGVtIiwicHJldmVudERlZmF1bHQiLCJIRUlHSFRfTE9BRElOR19JQ09OIiwiQnV0dG9uTG9hZGluZyIsImxvZyIsInNob3dMb2FkaW5nIiwiaGVpZ2h0TG9hZGluZ0ljb24iLCJwcmVwZW5kIiwiTE9BRElOR19EVUFMX1JJTkdfV0hJVEUiLCJoaWRlIiwiZGF0ZXBpY2tlckZhY3RvcnkiLCJkYXRlcGlja2VyTG9jYWxlIiwiRGF0ZXBpY2tlciIsIiRkYXRlcGlja2VyIiwiJHVpRGF0ZXBpY2tlciIsImluaXRGb3JtRGF0ZXBpY2tlciIsIm9uQ2xpY2tEYXRlcGlja2VyIiwiZmFjdG9yeSIsImRhdGVwaWNrZXIiLCJjaGFuZ2VNb250aCIsImNoYW5nZVllYXIiLCJQaG9uZU51bWJlciIsImNvdW50cnlDYWxsaW5nQ29kZXMiLCJwYXJzZSIsImNsYXNzRHJvcGRvd25Db3VudHJ5Q2FsbGluZ0NvZGUiLCJkaXNwbGF5UGhvbmVOdW1iZXJJbnB1dCIsInNldENhbGxpbmdDb2RlT25Ecm9wZG93biIsImdldERyb3Bkb3duQ291bnRyeUNhbGxpbmdDb2RlIiwib25VcGRhdGVDb3VudHJ5Q2FsbGluZ0NvZGUiLCIkY291bnRyeSIsImdldEhUTUxDb3VudHJ5QW5kQ2FsbGluZ0NvZGUiLCJwcmVmaXhFbnRpdHkiLCJhbHBoYTIiLCJjYWxsaW5nQ29kZSIsImdldEhUTUxDb3VudHJ5RmxhZyIsInRvTG93ZXJDYXNlIiwiZmxhZ3MiLCJyZWR1Y2UiLCJpbnB1dCIsInRyYW5zbGF0aW9ucyIsImxhYmVsIiwic2VsZWN0Q291bnRyeUNhbGxpbmdDb2RlIiwibG9jYXRpb25Db3VudHJ5SWQiLCJkYXRlcGlja2VyREVGYWN0b3J5IiwiZGF0ZXBpY2tlckVORmFjdG9yeSIsImRhdGVwaWNrZXJQVEZhY3RvcnkiLCJMT0NBVElPTl9ORUlHSEJPUkhPT0QiLCJQUk9QRVJUWV9QSE9UT19VUExPQUQiLCJQUk9QRVJUWV9QSE9UT19ERUxFVEUiLCJQUk9QRVJUWV9QSE9UT19TT1JUIiwiQ1VTVE9NX0ZJRUxEUyIsImRvbmUiLCJub3RGb3VuZCIsIm5vdEZvdW5kTG9jYXRpb25CeVBvc3RhbENvZGUiLCJub3RGb3VuZExvY2F0aW9uT25Hb29nbGVNYXBzIiwibG9hZGluZyIsImxvY2F0aW9uR29vZ2xlTWFwc0ZvdW5kU3VjY2Vzc2Z1bGx5IiwibG9jYXRpb25Gb3VuZFN1Y2Nlc3NmdWxseSIsInNlYXJjaExvY2F0aW9uQnlQb3N0YWxDb2RlIiwic2VhcmNoTG9jYXRpb25Pbkdvb2dsZU1hcHMiLCJzZWxlY3RQaG90b3MiLCJqUXVlcnkiLCJyZWdpc3RlclNlcnZpY2UiLCJ0aXRsZSIsImJvZHkiLCJ0aGVtZUNvbG9yIiwiJG9sZFRvYXN0IiwiYWRkaXRpb25hbENsYXNzIiwiJG5ld1RvYXN0IiwiVFJBTlNMQVRJT05TIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyJdLCJzb3VyY2VSb290IjoiIn0=