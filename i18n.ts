import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './src/shared/translations/pt.json';

const resources =
{
    pt
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
