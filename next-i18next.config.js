// if we want to be able to fetch the translations from a different server. https://github.com/i18next/i18next-http-backend
// import backend from 'i18next-http-backend'

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    // use: [backend],
    // saveMissing: true, // this is very useful while developing, it generates a <namespace>.missing.json file with the keys that are currently missing in the translation files
    // debug: true  // logs current configuration and other useful data to console
  },
}
