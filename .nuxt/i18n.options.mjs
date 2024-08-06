
// @ts-nocheck


export const localeCodes =  [
  "en-US",
  "nl-NL"
]

export const localeLoaders = {
  "en-US": [{ key: "../locales/en-US.json", load: () => import("../locales/en-US.json" /* webpackChunkName: "locale__Users_christoph_Desktop_try_out_322_locales_en_US_json" */), cache: true }],
  "nl-NL": [{ key: "../locales/nl-NL.json", load: () => import("../locales/nl-NL.json" /* webpackChunkName: "locale__Users_christoph_Desktop_try_out_322_locales_nl_NL_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en-US",
      "iso": "en-US",
      "name": "English",
      "files": [
        "locales/en-US.json"
      ]
    },
    {
      "code": "nl-NL",
      "iso": "nl-NL",
      "name": "Nederlands",
      "files": [
        "locales/nl-NL.json"
      ]
    }
  ],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en-US",
    "iso": "en-US",
    "name": "English",
    "files": [
      {
        "path": "locales/en-US.json"
      }
    ]
  },
  {
    "code": "nl-NL",
    "iso": "nl-NL",
    "name": "Nederlands",
    "files": [
      {
        "path": "locales/nl-NL.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
