import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from './locales/en'
import { ch } from './locales/ch'
import { jp } from './locales/jp'

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	resources: {
		en: {
			translations: en,
		},
		ch: {
			translations: ch,
		},
		jp: {
			translations: jp,
		},
	},
	ns: ['translations'],
	interpolation: {
		escapeValue: false,
	},
})

i18n.languages = ['en', 'ch', 'jp']

export default i18n
