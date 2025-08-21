import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './en.json';
import ar from './ar.json';

const resources = { en: { translation: en }, ar: { translation: ar } } as const;

if (!i18n.isInitialized) {
	i18n
		.use(initReactI18next)
		.init({
			compatibilityJSON: 'v3',
			resources,
			lng: (Localization.locale || 'en').startsWith('ar') ? 'ar' : 'en',
			fallbackLng: 'en',
			interpolation: { escapeValue: false }
		});
}

export default i18n;