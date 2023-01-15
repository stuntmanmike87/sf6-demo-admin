import TRANSLATIONS from "../constants/translations";

web.registerService('translate', {
    locale: document.documentElement.lang,

    /**
     * @param {String} key Translate string key.
     * @return {String}
     */
    text (key) {
        if (!this.locale) {
            return '';
        }

        return TRANSLATIONS[this.locale][key] ?? '';
    }
});
