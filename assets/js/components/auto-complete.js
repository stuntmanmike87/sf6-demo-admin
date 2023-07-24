import web from '@sulu/web';
import $ from 'jquery';
import CLASSES from '../constants/classes';

/**
 * AutoComplete component.
 */
class AutoComplete {
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
    initialize($el, options) {
        this.$el = $($el);
        this.$document = $(document);
        this.window = $(window);
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
    bindEvents() {
        this.$inputText.on('keyup', this.onChangeInput.bind(this));
        this.$inputText.on('keyup', this.onChangeInput.bind(this));
        this.window.on('resize', this.onResize.bind(this));
        this.$document.on('keydown', this.onKeydown.bind(this));
    }

    prepareInput() {
        // Make clone and create input of hidden type.
        this.$inputHidden = this.$input.clone();
        this.$inputHidden.attr('type', 'hidden');
        this.$inputHidden.insertAfter(this.$inputText);

        // Default values. Usually by edit form when if necessary to load data and need to displayed in input.
        this.$inputText.val(this.$input.data('auto-complete-text'));
        this.$inputHidden.val(this.$input.data('auto-complete-value'));

        const nameInputText = this.$inputText.attr('name');
        this.$inputText.attr('name', `${nameInputText}_auto_complete_text`);

        this.$inputText.attr('autocomplete', 'none');
        this.classResults = 'js-auto-complete-results';
        this.classResultsItem = 'js-auto-complete-results-item';
    }

    /**
     * Load data via API url after changed input.
     *
     * {Object} event
     */
    onChangeInput(event) {
        let $input = $(event.currentTarget);

        // Detect if value changed, then nothing happen.
        if (this.tmpInputVal === $input.val()) {
            return;
        }

        const text = $input.val();
        this.tmpInputVal = text;

        let $results = $(`.${this.classResults}`);

        if ($results.length) {
            $results.remove();
        }

        if (1 >= text.length) {
            return;
        }

        let dataToSend = {text: text};

        if (0 < Object.keys(this.options.data).length) {
            // ES6 with spread operator.
            dataToSend = {...this.options.data, ...{text: text}};
        }

        $.ajax({
            url: this.options.url,
            data: dataToSend,
            type: this.options.method,
            error: (data) => {
                // eslint-disable
                console.error(data);
                // eslint-enable
            },
            success: (data) => {
                let obj = data[this.options.dataNode];

                if (false === data.success || 0 === obj.length) {
                    // eslint-disable
                    console.error(data.message);
                    // eslint-enable
                    return;
                }

                // Avoid duplicate results list.
                $(`.${this.classResults}`).remove();

                let html = `<ul class="auto-complete-input-results ${this.classResults} ${this.options.classDivResults}">`;

                $.map(obj, (val, index) => {
                    let arrText = [];

                    $.map(this.options.dataText, (dataText, index) => {
                        arrText[index] = val[dataText];
                    });

                    html += `<li class="${this.classResultsItem}" data-json='${JSON.stringify(val)}' data-item-index='${index}'>${arrText.join(' ')}</li>`;
                });

                html += '</ul>';

                $results = $(html);

                $results.css('width',`${$input.outerWidth()}px`);
                $results.insertAfter($input);

                $results.find(`.${this.classResultsItem}`).on('click', this.onClickItemFromResults.bind(this));
            },
        });
    }

    onResize() {
        // Resize auto-complete results.
        let $propertyCountryResults = $(`.${this.classResults}`);

        if ($propertyCountryResults.length) {
            $propertyCountryResults.css('width',`${this.$inputText.outerWidth()}px`);
        }
    }

    /**
     * Handle by click on result list.
     *
     * {Object} event
     */
    onClickItemFromResults(event) {
        const $item = $(event.currentTarget);
        this.getValueToInput($item);
    }

    /**
     * Get value from results list and put on input field.
     *
     * {Object} $item
     */
    getValueToInput($item) {
        const text = $item.text();
        const objData = $item.data('json');
        const value = objData[this.options.dataValue];

        // Remove results.
        $(`.${this.classResults}`).remove();

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
            $.map(this.options.attr, (attrName) => {
                const attrValue = objData[attrName];

                this.$inputText.attr(`data-auto-complete-${attrName}` , attrValue);
                this.$inputHidden.attr(`data-auto-complete-${attrName}` , attrValue);
            });
        }
    }

    onKeydown(event) {
        const $results = this.$el.find(`.${this.classResults}`);
        const $items = $results.find('li');
        const $itemActive = $items.filter(`.${CLASSES.IS_ACTIVE}`);

        // If not are showing results, then nothing will happen.
        if (0 === $results.length) {
            return;
        }

        // Did typ on arrow up.
        if (event.keyCode === 38) {
            if(0 === $itemActive.length) {
                $items.eq($items.length - 1).addClass(CLASSES.IS_ACTIVE);

                return;
            }

            $itemActive.removeClass(CLASSES.IS_ACTIVE);

            const $prevItem = $items.eq($itemActive.data('item-index') - 1);

            if (0 < $prevItem.length) {
                $prevItem.addClass(CLASSES.IS_ACTIVE);
            }

        // Did typ on arrow down.
        } else if (event.keyCode === 40) {
            if(0 === $itemActive.length) {
                $items.eq(0).addClass(CLASSES.IS_ACTIVE);

                return;
            }

            $itemActive.removeClass(CLASSES.IS_ACTIVE);

            const $nextItem = $items.eq($itemActive.data('item-index') + 1);

            if (0 < $nextItem.length) {
                $nextItem.addClass(CLASSES.IS_ACTIVE);
            } else {
                $items.eq(0).addClass(CLASSES.IS_ACTIVE);
            }

        // Did typ on ENTER and detect an active item from list.
        } else if(event.keyCode === 13 && 0 < $itemActive.length) {
            event.preventDefault();

            this.getValueToInput($itemActive);
        }
    }
}

web.registerComponent('auto-complete', AutoComplete);
