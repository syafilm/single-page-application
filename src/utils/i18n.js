import i18next from 'i18next'

const localeEn = require('locales/en.yml')
const localeId = require('locales/id.yml')

switch(document.documentElement.lang) {
  case 'id':
    sessionStorage.setItem('locale', 'id')
    break;
  default:
    sessionStorage.setItem('locale', 'en')
}

const usedLocale = sessionStorage.getItem('locale') || 'en'

i18next.init({
  interpolation: {
    escapeValue: false,
    prefix: '%{',
    suffix: '}',
  },
  lng: usedLocale,
  resources: {
    en: { translation: localeEn.en },
    id: { translation: localeId.id },
  },
})

export default i18next
