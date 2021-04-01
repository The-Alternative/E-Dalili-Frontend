import ar from '../assets/i18n/ar.json';
import en from '../assets/i18n/en.json';
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem('lang') || 'en',
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    messages: {
        ar: ar,
        en: en,
    },
});
