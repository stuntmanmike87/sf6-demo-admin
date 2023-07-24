// Load all necessary languages from datepicker library.
import datepickerDEFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-de';
import datepickerENFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-en-GB';
import datepickerPTFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-pt-BR';

export default {
    'en': {
        factory: datepickerENFactory,
    },
    'de': {
        factory: datepickerDEFactory,
    },
    'pt': {
        factory: datepickerPTFactory,
    },
};
